/* global interactions shared by every page */

const root = document.documentElement;
const THEME_KEY = "jgg-theme";

function applyTheme(theme: "dark" | "light") {
  root.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* private mode */
  }
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", theme === "light" ? "#f5efe3" : "#0b0d11");
  document.querySelectorAll<HTMLButtonElement>("#theme-toggle").forEach((btn) => {
    btn.setAttribute("aria-label", theme === "light" ? "切换到深色主题" : "切换到浅色主题");
  });
}

document.querySelectorAll<HTMLButtonElement>("#theme-toggle").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "light" ? "dark" : "light");
  });
});

applyTheme((root.dataset.theme as "dark" | "light") || "dark");

/* language selector */
const langSelect = document.getElementById("lang-select") as HTMLSelectElement | null;
langSelect?.addEventListener("change", () => {
  if (langSelect.value) window.location.href = langSelect.value;
});

/* mobile navigation */
const mobileToggle = document.querySelector<HTMLButtonElement>("#mobile-toggle");
const mobileNav = document.querySelector<HTMLElement>("#mobile-nav");

function closeMobileNav() {
  if (!mobileNav || !mobileToggle) return;
  mobileNav.classList.remove("is-open");
  mobileToggle.setAttribute("aria-expanded", "false");
  mobileToggle.setAttribute("aria-label", "打开菜单");
}

if (mobileToggle && mobileNav) {
  mobileToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("is-open");
    mobileToggle.setAttribute("aria-expanded", String(open));
    mobileToggle.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  });

  mobileNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMobileNav));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMobileNav();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) closeMobileNav();
  });
}

/* add safe external-link attributes */
document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((link) => {
  if (link.origin !== window.location.origin) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
});

/* scroll reveal */
const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px 100px 0px", threshold: 0.01 },
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* table of contents active state */
const tocLinks = [...document.querySelectorAll<HTMLAnchorElement>(".toc a[href^='#']")];
if (tocLinks.length && "IntersectionObserver" in window) {
  const targets = tocLinks
    .map((link) => document.querySelector<HTMLElement>(link.getAttribute("href") || ""))
    .filter((el): el is HTMLElement => Boolean(el));

  const tocObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const id = visible[0].target.id;
      tocLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    },
    { rootMargin: "-18% 0px -65% 0px", threshold: [0, 1] },
  );

  targets.forEach((target) => tocObserver.observe(target));
}

/* header shadow on scroll */
const header = document.querySelector<HTMLElement>(".site-header");
if (header) {
  const onScroll = () => {
    header.style.boxShadow = window.scrollY > 8 ? "0 10px 30px rgba(0,0,0,.18)" : "none";
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* keyboard: g then h to go home, / to focus search if present */
let gPressed = false;
document.addEventListener("keydown", (event) => {
  const target = event.target as HTMLElement;
  if (target.matches("input, textarea, select, [contenteditable='true']")) return;
  if (event.key === "g") {
    gPressed = true;
    setTimeout(() => (gPressed = false), 600);
  } else if (gPressed && event.key === "h") {
    window.location.href = `${import.meta.env.BASE_URL}`;
    gPressed = false;
  }
});
