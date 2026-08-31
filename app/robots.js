export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/mentions-legales",
          "/politique-confidentialite",
          "/en/legal-notice",
          "/en/privacy-policy",
        ],
      },
    ],
    sitemap: "https://www.statim-management.fr/sitemap.xml",
  };
}
