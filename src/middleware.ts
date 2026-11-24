import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { i18n } from "../i18n-config";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  try {
    return matchLocale(languages, locales, i18n.defaultLocale);
  } catch (e) {
    // Invalid accept-language header
    return i18n.defaultLocale;
  }
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static assets served from `public` (anything with a file extension)
  if (/\.[^/]+$/.test(pathname)) return;

  // Case studies index: rendered by app/[lang]/case-studies, served at /case-studies/
  if (pathname === "/case-studies" || pathname === "/case-studies/") {
    return NextResponse.rewrite(
      new URL(`/${i18n.defaultLocale}/case-studies`, request.url)
    );
  }

  // Static case studies in public/case-studies/<slug>/index.html.
  // Their assets are relative, so the trailing slash is required.
  // Plain URL objects: NextURL would re-apply the request's trailing-slash state.
  const search = request.nextUrl.search;
  const caseStudy = pathname.match(/^\/case-studies\/([a-z0-9-]+)(\/?)$/);
  if (caseStudy) {
    if (!caseStudy[2]) {
      return NextResponse.redirect(
        new URL(`/case-studies/${caseStudy[1]}/${search}`, request.url),
        308
      );
    }
    return NextResponse.rewrite(
      new URL(`/case-studies/${caseStudy[1]}/index.html${search}`, request.url)
    );
  }

  // Everywhere else keep Next's default of stripping trailing slashes
  // (disabled globally by skipTrailingSlashRedirect in next.config.js).
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.replace(/\/+$/, "") || "/";
    return NextResponse.redirect(new URL(stripped + search, request.url), 308);
  }

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!_next).*)"],
};
