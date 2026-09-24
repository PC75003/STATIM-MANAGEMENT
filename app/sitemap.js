import { POSTS } from "@/lib/posts";
import { LOCALES, href } from "@/lib/i18n";

const BASE = "https://www.statim-management.fr";

// Pages légales exclues : elles sont en noindex (voir leur generateMetadata).
const STATIC_ROUTES = [
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
  ["/contact", 0.8],
];

export default function sitemap() {
  const now = new Date();
  const routes = [
    ...STATIC_ROUTES.map(([path, priority]) => [path, priority, now]),
    ...POSTS.fr.map((p) => [`/blog/${p.slug}`, 0.5, new Date(p.date)]),
  ];

  const entries = [];
  for (const [path, priority, lastModified] of routes) {
    const languages = { fr: `${BASE}${href("fr", path)}`, en: `${BASE}${href("en", path)}` };
    for (const lang of LOCALES) {
      entries.push({
        url: `${BASE}${href(lang, path)}`,
        lastModified,
        changeFrequency: path.startsWith("/blog/") ? "monthly" : "yearly",
        priority,
        alternates: { languages },
      });
    }
  }
  return entries;
}
