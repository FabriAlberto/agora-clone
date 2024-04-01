import { NextRequest, NextResponse } from "next/server";
import { Locale, Locales } from "./types/common.type";

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname.toLowerCase();
  const index = pathname.startsWith("/") ? 1 : 0;
  const locale = pathname.split("/")[index];

  if (!Locales.includes(locale as Locale)) {
    return NextResponse.redirect(new URL("/es", request.url));
  }
  
  const response = NextResponse.next()
  response.headers.set("locale", locale);
  return response;
}
export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
