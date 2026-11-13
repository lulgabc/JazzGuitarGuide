#!/usr/bin/env python3
"""Generate the original 10-second jazz-guitar intro used on the homepage.

The clip is synthesised from scratch (Karplus-Strong plucked strings plus a
simple bass/ride/comping arrangement), so it carries no third-party recording
rights. Requires numpy + scipy; output is committed under public/audio/.

    python3 scripts/generate_intro.py
"""

from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from scipy import signal
from scipy.io import wavfile

SR = 44_100
DURATION = 10.0
BPM = 120
BEAT = 60.0 / BPM
BAR = BEAT * 4
START = 0.08
rng = np.random.default_rng(20261113)


def midi_hz(note: float) -> float:
    return 440.0 * 2 ** ((note - 69) / 12)


def adsr(n: int, attack: float, decay: float, sustain: float, release: float) -> np.ndarray:
    a = max(1, int(attack * SR))
    d = max(1, int(decay * SR))
    r = max(1, int(release * SR))
    s = max(0, n - a - d - r)
    env = np.concatenate(
        [
            np.linspace(0, 1, a, endpoint=False),
            np.linspace(1, sustain, d, endpoint=False),
            np.full(s, sustain),
            np.linspace(sustain, 0, r),
        ]
    )
    if len(env) < n:
        env = np.pad(env, (0, n - len(env)))
    return env[:n]


def place(track: np.ndarray, sample: np.ndarray, start: float, gain: float = 1.0) -> None:
    i = int(start * SR)
    if i >= len(track):
        return
    j = min(len(track), i + len(sample))
    track[i:j] += sample[: j - i] * gain


def lowpass(x: np.ndarray, cutoff: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, cutoff / (SR / 2), btype="low")
    return signal.lfilter(b, a, x)


def highpass(x: np.ndarray, cutoff: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, cutoff / (SR / 2), btype="high")
    return signal.lfilter(b, a, x)


def bandpass(x: np.ndarray, lo: float, hi: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, [lo / (SR / 2), hi / (SR / 2)], btype="band")
    return signal.lfilter(b, a, x)


def pluck(note: int, duration: float, velocity: float = 0.8) -> np.ndarray:
    """Karplus-Strong plucked string with a warm electric-guitar colour."""
    n = int(duration * SR)
    freq = midi_hz(note)
    delay = max(2, int(round(SR / freq)))
    exc = rng.normal(0, 1, delay + 2)
    # soften the excitation: a pick is bright, but not pure white noise
    exc = np.convolve(exc, np.array([0.35, 0.5, 0.15]), mode="same")
    y = np.zeros(n)
    y[: len(exc)] = exc * velocity
    decay = 0.9955
    for i in range(delay + 1, n):
        y[i] = decay * 0.5 * (y[i - delay] + y[i - delay - 1])
    # body + pick transient
    y = lowpass(y, 3200)
    y = highpass(y, 75)
    body = np.sin(2 * np.pi * freq * np.arange(n) / SR) * np.exp(-np.arange(n) / (SR * 0.18))
    y = y + 0.05 * body * velocity
    y = np.tanh(y * 1.15)
    y *= np.minimum(1.0, np.linspace(1, 0.0, n) + 0.15)
    # short fade to avoid clicks
    fade = min(len(y), int(0.012 * SR))
    y[:fade] *= np.linspace(0, 1, fade)
    y[-fade:] *= np.linspace(1, 0, fade)
    return y


def bass(note: int, duration: float, velocity: float = 0.8) -> np.ndarray:
    n = int(duration * SR)
    t = np.arange(n) / SR
    f = midi_hz(note)
    x = (
        0.78 * np.sin(2 * np.pi * f * t)
        + 0.18 * np.sin(2 * np.pi * 2 * f * t)
        + 0.06 * np.sin(2 * np.pi * 3 * f * t)
    )
    env = adsr(n, 0.008, 0.22, 0.35, 0.18)
    x = lowpass(x * env, 900)
    x = np.tanh(x * 1.1)
    return x * velocity


def rhodes_chord(notes: list[int], duration: float, velocity: float = 0.35) -> np.ndarray:
    n = int(duration * SR)
    t = np.arange(n) / SR
    out = np.zeros(n)
    for note in notes:
        f = midi_hz(note)
        tone = (
            np.sin(2 * np.pi * f * t)
            + 0.32 * np.sin(2 * np.pi * 2.0 * f * t)
            + 0.12 * np.sin(2 * np.pi * 3.01 * f * t)
        )
        out += tone
    env = adsr(n, 0.012, 0.45, 0.25, 0.6)
    out = lowpass(out * env, 2600)
    return out * velocity / max(1, len(notes))


def noise_hit(duration: float, lo: float, hi: float, decay: float) -> np.ndarray:
    n = int(duration * SR)
    x = rng.normal(0, 1, n)
    x = bandpass(x, lo, hi)
    env = np.exp(-np.arange(n) / (SR * decay))
    return x * env


def ride() -> np.ndarray:
    return noise_hit(0.16, 4800, 12000, 0.055) * 0.55


def hihat() -> np.ndarray:
    return noise_hit(0.06, 7500, 15000, 0.018) * 0.5


def snare() -> np.ndarray:
    return noise_hit(0.14, 1200, 3200, 0.045) * 0.45


def kick() -> np.ndarray:
    n = int(0.18 * SR)
    t = np.arange(n) / SR
    f = 105 * np.exp(-t * 24) + 44
    phase = 2 * np.pi * np.cumsum(f) / SR
    env = np.exp(-t * 18)
    return np.sin(phase) * env * 0.65


def reverb(x: np.ndarray, amount: float = 0.22) -> np.ndarray:
    """Small synthetic room: exponentially decaying noise convolved with x."""
    ir_n = int(1.1 * SR)
    ir = rng.normal(0, 1, ir_n) * np.exp(-np.arange(ir_n) / (SR * 0.22))
    ir = lowpass(ir, 4200)
    ir[0] = 1.0
    wet = signal.fftconvolve(x, ir, mode="full")[: len(x)]
    wet /= max(1e-9, np.max(np.abs(wet)))
    return x * (1 - amount) + wet * amount


# ---- arrangement ---------------------------------------------------------

# (start beat, midi note, duration in beats, velocity)
SOLO = [
    # Dm7
    (0.00, 69, 0.50, 0.82), (0.50, 72, 0.50, 0.78), (1.00, 74, 0.50, 0.86),
    (1.50, 77, 0.50, 0.92), (2.00, 76, 0.50, 0.84), (2.50, 74, 0.50, 0.78),
    (3.00, 72, 0.95, 0.88),
    # G7
    (4.00, 71, 0.50, 0.82), (4.50, 74, 0.50, 0.78), (5.00, 77, 0.50, 0.92),
    (5.50, 79, 0.50, 0.96), (6.00, 77, 0.50, 0.88), (6.50, 74, 0.50, 0.80),
    (7.00, 71, 0.95, 0.88),
    # Cmaj7
    (8.00, 76, 0.50, 0.84), (8.50, 79, 0.50, 0.90), (9.00, 83, 0.50, 0.96),
    (9.50, 81, 0.50, 0.88), (10.00, 79, 0.50, 0.84), (10.50, 76, 0.50, 0.80),
    (11.00, 74, 0.50, 0.78), (11.50, 72, 0.50, 0.82),
    # Cmaj7 ending
    (12.00, 76, 1.45, 0.90), (13.50, 79, 0.45, 0.82), (14.00, 76, 0.45, 0.78),
    (14.50, 72, 2.20, 0.86),
]

BASS = [
    # Dm7
    (0.00, 38), (1.00, 41), (2.00, 45), (3.00, 48),
    # G7
    (4.00, 43), (5.00, 47), (6.00, 50), (7.00, 53),
    # Cmaj7
    (8.00, 48), (9.00, 52), (10.00, 55), (11.00, 59),
    # Cmaj7 ending
    (12.00, 48), (13.00, 43), (14.00, 40), (15.00, 36),
]

CHORDS = [
    (0.00, [50, 53, 57, 60], 1.8),   # Dm7
    (4.00, [55, 59, 62, 65], 1.8),   # G7
    (8.00, [48, 52, 55, 59], 1.8),   # Cmaj7
    (12.00, [48, 52, 55, 59, 62], 3.6),  # Cmaj7 with 9
]

# ride pattern (beats within each bar), swing feel
RIDE_PATTERN = [0.0, 1.0, 1.66, 2.0, 3.0, 3.66]
HAT_BEATS = [1.0, 3.0]
SNARE_BEATS = [1.0, 3.0]
KICK_BEATS = [0.0, 2.0]


def main() -> None:
    n = int(DURATION * SR)
    guitar = np.zeros(n)
    bass_track = np.zeros(n)
    comp = np.zeros(n)
    drums = np.zeros(n)

    for beat, note, length, velocity in SOLO:
        sample = pluck(note, length * BEAT + 0.45, velocity)
        place(guitar, sample, START + beat * BEAT, 0.9)

    for beat, note in BASS:
        sample = bass(note, 0.44, 0.78)
        place(bass_track, sample, START + beat * BEAT, 0.9)

    for beat, notes, length in CHORDS:
        sample = rhodes_chord(notes, length * BEAT, 0.38)
        place(comp, sample, START + beat * BEAT, 0.9)

    for bar in range(4):
        base = bar * 4
        for b in RIDE_PATTERN:
            place(drums, ride(), START + (base + b) * BEAT, 0.55)
        for b in HAT_BEATS:
            place(drums, hihat(), START + (base + b) * BEAT, 0.55)
        for b in SNARE_BEATS:
            place(drums, snare(), START + (base + b) * BEAT, 0.45)
        for b in KICK_BEATS:
            place(drums, kick(), START + (base + b) * BEAT, 0.65)

    # cymbal swell into the final chord
    swell = noise_hit(1.6, 5000, 12000, 0.7)
    swell *= np.linspace(0, 1, len(swell)) ** 1.6
    place(drums, swell, START + 12.0 * BEAT, 0.18)

    # stereo placement
    guitar = reverb(guitar, 0.18)
    comp = reverb(comp, 0.26)
    drums = reverb(drums, 0.12)

    left = guitar * 0.56 + comp * 0.38 + bass_track * 0.50 + drums * 0.52
    right = guitar * 0.44 + comp * 0.62 + bass_track * 0.50 + drums * 0.48

    # gentle bus compression / warmth
    mix = np.stack([left, right], axis=1)
    mix = np.tanh(mix * 1.15)
    mix /= max(1e-9, np.max(np.abs(mix)))
    mix *= 0.92
    # fade in / out
    fade_in = int(0.035 * SR)
    fade_out = int(0.6 * SR)
    mix[:fade_in] *= np.linspace(0, 1, fade_in)[:, None]
    mix[-fade_out:] *= np.linspace(1, 0, fade_out)[:, None]

    out_dir = Path("public/audio")
    out_dir.mkdir(parents=True, exist_ok=True)
    wav_path = out_dir / "intro-solo.wav"
    wavfile.write(wav_path, SR, (mix * 32767).astype(np.int16))
    print(f"wrote {wav_path} ({wav_path.stat().st_size / 1e6:.1f} MB)")


if __name__ == "__main__":
    main()
