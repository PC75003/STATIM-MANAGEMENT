import { POSTS } from "@/lib/posts";
import { LOCALES, href } from "@/lib/i18n";

const BASE = "https://www.statim-management.fr";

const ROUTES = [
  ["/", 1.0],
  ["/a-propos", 0.7],
  ["/references", 0.6],
  ["/solutions-rh", 0.9],
  ["/drh-externalisee", 0.9],
  ["/audit-rh", 0.8],
  ["/conseil-rh", 0.9],
  ["/entretiens-professionnels", 0.9],
  ["/recrutement", 0.8],
  ["/coaching", 0.8],
  ["/blog", 0.6],
  ...POSTS.fr.map((p) => [`/blog/${p.slug}`, 0.5]),
  ["/contact", 0.8],
  ["/mentions-legales", 0.2],
  ["/politique-confidentialite", 0.2],
];

export default function sitemap() {
  const now = new Date();
  const entries = [];
  for (const [path, priority] of ROUTES) {
    const languages = { fr: `${BASE}${href("fr", path)}`, en: `${BASE}${href("en", path)}` };
    for (const lang of LOCALES) {
      entries.push({
        url: `${BASE}${href(lang, path)}`,
        lastModified: now,
        changeFrequency: path.startsWith("/blog") ? "monthly" : "yearly",
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
