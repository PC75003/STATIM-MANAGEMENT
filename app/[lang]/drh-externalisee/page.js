import ServiceLayout from "@/components/ServiceLayout";
import { SERVICES } from "@/lib/services";
import { buildAlternates, href } from "@/lib/i18n";

const SLUG = "drh-externalisee";

export function generateMetadata({ params }) {
  const s = SERVICES[params.lang][SLUG];
  return {
    title: s.metaTitle,
    description: s.metaDesc,
    alternates: buildAlternates(params.lang, `/${SLUG}`),
    openGraph: { title: `${s.metaTitle} | STATIM MANAGEMENT`, description: s.metaDesc, url: href(params.lang, `/${SLUG}`) },
  };
}

export default function Page({ params }) {
  return <ServiceLayout lang={params.lang} slug={SLUG} />;
}
