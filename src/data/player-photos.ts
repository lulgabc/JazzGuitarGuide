/**
 * Player portraits are low-resolution images from Wikipedia / Wikimedia Commons.
 * Each entry carries its license and source; see the photo credits on /players/.
 * Images are displayed in grayscale as a visual backdrop, never as the main content.
 */

export type PlayerPhoto = {
  src: string;
  credit: string;
  license: string;
  source: string;
};

export const PLAYER_PHOTOS: Record<string, PlayerPhoto> = {
  "allan-holdsworth": { src: "/players/allan-holdsworth.jpg", credit: "Chrisparks", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Holdsworth-quilter-rig.jpg" },
  "baden-powell": { src: "/players/baden-powell.jpg", credit: "Unknown", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Vinicius_e_Baden_Powell,_1963.tif" },
  "barney-kessel": { src: "/players/barney-kessel.jpg", credit: "vernon.hyde", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Barney_Kessel_2.jpg" },
  "bill-frisell": { src: "/players/bill-frisell.jpg", credit: "Schorle", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Bill_Frisell_Trio_05_(cropped).jpg" },
  "bireli-lagrene": { src: "/players/bireli-lagrene.jpg", credit: "No machine-readable author provided. Pastorius54 assumed (based on copyright claims).", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Bireli_aux_Granges_le_26.08.06.jpg" },
  "charlie-christian": { src: "/players/charlie-christian.jpg", credit: "Published by DownBeat magazine. Photographed by Charles B. Nadell (per this scan).", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Charlie_Christian_(1939-10_Waldorf-Astoria_portrait).jpg" },
  "django-reinhardt": { src: "/players/django-reinhardt.jpg", credit: "William P. Gottlieb / Adam Cuerden", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Django_Reinhardt_(Gottlieb_07301).jpg" },
  "eddie-lang": { src: "/players/eddie-lang.jpg", credit: "Freulich (\"all photos by Freulich\")", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Eddie_Lang_-_Motion_Picture,_June_1930.jpg" },
  "emily-remler": { src: "/players/emily-remler.jpg", credit: "Brianmcmillen", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:Emily_Remler.jpg" },
  "george-benson": { src: "/players/george-benson.jpg", credit: "Angela George", license: "CC BY-SA 3.0", source: "https://commons.wikimedia.org/wiki/File:GeorgeBensonSept2011.jpg" },
  "gilad-hekselman": { src: "/players/gilad-hekselman.jpg", credit: "Hreinn Gudlaugsson", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Gilad-hekselman.jpg" },
  "herb-ellis": { src: "/players/herb-ellis.jpg", credit: "vernon.hyde", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Herb_Ellis.jpg" },
  "jim-hall": { src: "/players/jim-hall.jpg", credit: "tom.beetz", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Guitarist_jim_hall.jpg" },
  "joao-gilberto": { src: "/players/joao-gilberto.jpg", credit: "Tuca Vieira from São Paulo, Brazil", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Jo%C3%A3o_Gilberto.jpg" },
  "joe-pass": { src: "/players/joe-pass.jpg", credit: "Tom Marcello Webster, New York, USA", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Joe_Pass_(jazz)_(cropped).jpg" },
  "john-mclaughlin": { src: "/players/john-mclaughlin.jpg", credit: "Hantsheroes", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:John_McLaughlin_Blue_Note_2016.JPG" },
  "john-scofield": { src: "/players/john-scofield.jpg", credit: "Harald Krichel", license: "CC BY 3.0", source: "https://commons.wikimedia.org/wiki/File:John_Scofield-8615.jpg" },
  "johnny-smith": { src: "/players/johnny-smith.jpg", credit: "Unknown authorUnknown author", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Johnny_Smith_c._1962.jpg" },
  "julian-lage": { src: "/players/julian-lage.jpg", credit: "David Becker", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Julian_Lage.jpg" },
  "kenny-burrell": { src: "/players/kenny-burrell.jpg", credit: "Tom Marcello Webster, New York, USA", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Kenny_Burrell,_1977.jpg" },
  "kurt-rosenwinkel": { src: "/players/kurt-rosenwinkel.jpg", credit: "Dirk Neven", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Jeff_%27Tain%27_Watts_Trio_25_november_2018_BIM_Amsterdam_-_Kurt_Rosenwinkel_(51430761926).jpg" },
  "lage-lund": { src: "/players/lage-lund.jpg", credit: "Tore Sætre", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Lage_Lund_kvartett_Nasjonal_Jazzscene_2020_(213018).jpg" },
  "mary-halvorson": { src: "/players/mary-halvorson.jpg", credit: "OhWeh", license: "CC BY-SA 2.5", source: "https://commons.wikimedia.org/wiki/File:Mary_Halvorson_Unterfahrt_2011-01-25-002.jpg" },
  "mike-stern": { src: "/players/mike-stern.jpg", credit: "Tore Sætre", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Mike_Stern_Kongsberg_Jazzfestival_2018_(225558).jpg" },
  "pasquale-grasso": { src: "/players/pasquale-grasso.jpg", credit: "JerseyGrl99", license: "CC0", source: "https://commons.wikimedia.org/wiki/File:Grasso,_Pasquale_by_Ron_Jaramillo.jpg" },
  "pat-martino": { src: "/players/pat-martino.jpg", credit: "Tom Beetz @ http://home.hetnet.nl/~tbeetz/index.html", license: "CC BY 2.0", source: "https://commons.wikimedia.org/wiki/File:Pat_Martino.jpg" },
  "pat-metheny": { src: "/players/pat-metheny.jpg", credit: "R. Steven Rainwater from Dallas, US", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Pat_metheny_orch2.jpg" },
  "peter-bernstein": { src: "/players/peter-bernstein.jpg", credit: "Tsaorin", license: "CC BY-SA 4.0", source: "https://commons.wikimedia.org/wiki/File:Concierto_Peter_Berstein%26Mark_Whitfield_Organ_Quartet_at_SanJavier_2022_29.jpg" },
  "tal-farlow": { src: "/players/tal-farlow.jpg", credit: "Vernon Hyde", license: "CC BY-SA 2.0", source: "https://commons.wikimedia.org/wiki/File:Tal_Farlow_5.jpg" },
  "wes-montgomery": { src: "/players/wes-montgomery.jpg", credit: "Photo first published by Gibson. According to NPR, the photo was taken by Chuck Stewart.", license: "Public domain", source: "https://commons.wikimedia.org/wiki/File:Wes_Montgomery_(1967_Gibson_portrait).jpg" },
};
