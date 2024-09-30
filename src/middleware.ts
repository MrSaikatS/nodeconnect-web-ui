import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { decodeJwt } from "jose";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieToken = request.cookies.get("directus_session_token")?.value;

  const { pathname } = request.nextUrl;

  if (cookieToken === undefined || cookieToken === "") {
    if (pathname === "/auth/login" || pathname === "/auth/register") {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  } else {
    try {
      const { iss } = decodeJwt(cookieToken);

      if (iss === "directus" && pathname === "/auth/login") {
        return NextResponse.redirect(new URL("/", request.url));
      }

      if (iss === "directus" && pathname === "/auth/register") {
        return NextResponse.redirect(new URL("/", request.url));
      }

      if (iss !== "directus") {
        const customResponse = NextResponse.redirect(
          new URL("/auth/login", request.nextUrl),
        );

        customResponse.cookies.delete("directus_session_token");

        return customResponse;
      }
    } catch (error) {
      const customResponse = NextResponse.redirect(
        new URL("/auth/login", request.nextUrl),
      );

      customResponse.cookies.delete("directus_session_token");

      return customResponse;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/auth/:path*", "/create-post/:path*", "/profile/:path*"],
};
