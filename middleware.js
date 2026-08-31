import { NextResponse } from "next/server";
import { toCanonicalSlugs } from "@/lib/i18n";

// FR servi à la racine (réécrit en interne vers /fr), EN sous /en avec slugs anglais.
export function middleware(request) {
  const { pathname } = request.nextUrl;

  // /en et /en/* : traduction des slugs anglais publics -> slugs canoniques (dossiers).
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    const canonical = pathname === "/en" ? "/" : toCanonicalSlugs(pathname.slice(3));
    const internal = canonical === "/" ? "/en" : `/en${canonical}`;
    if (internal !== pathname) {
      const url = request.nextUrl.clone();
      url.pathname = internal;
      return NextResponse.rewrite(url);
    }
    return NextResponse.next();
  }

  // /fr et /fr/* : canonicalisation → on retire le préfixe (le FR vit à la racine).
  if (pathname === "/fr" || pathname.startsWith("/fr/")) {
    const stripped = pathname.replace(/^\/fr/, "") || "/";
    return NextResponse.redirect(new URL(stripped, request.url));
  }

  // Tout le reste = français : réécriture interne vers /fr + chemin (URL inchangée).
  const url = request.nextUrl.clone();
  url.pathname = `/fr${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

// On exclut les assets, l'API et les routes de métadonnées du traitement de langue.
export const config = {
  matcher: ["/((?!_next|api|images|favicon|robots.txt|sitemap.xml|.*\\.).*)"],
};
