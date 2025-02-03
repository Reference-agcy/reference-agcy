import { i18nRouter } from "next-i18n-router";
import { NextRequest, NextResponse } from "next/server";
import i18nConfig from "./i18nConfig";
import { auth } from "./middleware/auth";

function isAuthenticated(request: NextRequest) {
  return Boolean(request.cookies.get("token")?.value);
}

function isAdminAuthenticated(request: NextRequest) {
  return Boolean(request.cookies.get("adminToken")?.value);
}

const zohoPagesRoutes = ["/candidate", "/job-openings"];

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.includes("api")) {
    const unauthorizedRoutes = ["/api/auth/login", "/api"];
    const unauthorizedGETOnlyRoutes = ["/api/posts", "/api/jobs"];
    if (unauthorizedRoutes.includes(request.nextUrl.pathname)) {
      return NextResponse.next();
    } else if (
      (unauthorizedGETOnlyRoutes.includes(request.nextUrl.pathname) ||
        request.nextUrl.pathname.startsWith("/api/posts") ||
        request.nextUrl.pathname.startsWith("/api/jobs")) &&
      request.method === "GET"
    ) {
      return NextResponse.next();
    } else {
      return auth(request);
    }
  }

  const { pathname } = request.nextUrl;

  const segments = pathname.split("/");
  const langPrefix =
    segments.length > 1 && i18nConfig.locales.includes(segments[1])
      ? `/${segments[1]}`
      : "";
  const route = langPrefix ? `/${segments.slice(2).join("/")}` : pathname;

  if (
    !request.cookies.get("zoho_refresh_token")?.value &&
    zohoPagesRoutes.some((r) => route === r || route.startsWith(`${r}`))
  ) {
    return NextResponse.redirect(
      new URL(
        `https://accounts.zoho.com/oauth/v2/auth?scope=ZohoRecruit.modules.ALL,ZohoRecruit.settings.ALL&client_id=${process.env.ZOHO_CLIENT_ID}&response_type=code&access_type=offline&redirect_uri=${process.env.ZOHO_REDIRECT_URI}`,
      ),
    );
  }

  const protectedRoutes = ["/profile"];
  const authRoutes = ["/login"];

  const isProtected = protectedRoutes.some(
    (r) => route === r || route.startsWith(`${r}`),
  );
  const isAuthRoute = authRoutes.some(
    (r) => route === r || route.startsWith(`${r}`),
  );

  if (route.includes("admin")) {
    if (!isAdminAuthenticated(request) && !route.includes("/admin/login")) {
      console.log(request.url);
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
    return NextResponse.next();
  }

  if (isProtected && !isAuthenticated(request)) {
    const loginUrl = langPrefix ? `${langPrefix}/login` : "/login";
    return NextResponse.redirect(new URL(loginUrl, request.url));
  }

  if (isAuthRoute && isAuthenticated(request)) {
    const profileUrl = langPrefix ? `/` : "/";
    return NextResponse.redirect(new URL(profileUrl, request.url));
  }

  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: "/((?!static|.*\\..*|_next).*)",
};
