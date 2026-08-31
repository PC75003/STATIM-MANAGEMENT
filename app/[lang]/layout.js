import "../globals.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LOCALES, DEFAULT_LOCALE, getDict, href, buildAlternates } from "@/lib/i18n";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }) {
  const lang = params.lang;
  const d = getDict(lang).meta;
  return {
    metadataBase: new URL("https://www.statim-management.fr"),
    title: { default: d.defaultTitle, template: d.titleTemplate },
    description: d.defaultDescription,
    alternates: buildAlternates(lang, "/"),
    openGraph: {
      type: "website",
      locale: lang === "fr" ? "fr_FR" : "en_GB",
      siteName: d.siteName,
      url: href(lang, "/"),
      title: d.ogTitle,
      description: d.ogDescription,
      images: [{ url: "/images/hero.webp", width: 1600, alt: d.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: d.ogTitle,
      description: d.ogDescription,
      images: ["/images/hero.webp"],
    },
  };
}

export default function RootLayout({ children, params }) {
  const lang = LOCALES.includes(params.lang) ? params.lang : DEFAULT_LOCALE;
  const d = getDict(lang);

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "STATIM MANAGEMENT",
    description: d.meta.orgDescription,
    url: "https://www.statim-management.fr",
    email: "contact@statim-management.fr",
    foundingDate: "2010",
    areaServed: [{ "@type": "Country", name: "France" }, { "@type": "Place", name: "Europe" }],
    address: {
      "@type": "PostalAddress",
      streetAddress: "5 rue des Filles du Calvaire",
      postalCode: "75003",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    knowsAbout: d.meta.orgDescription,
  };

  return (
    <html lang={d.htmlLang}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body>
        <Header lang={lang} />
        <main id="contenu">{children}</main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
