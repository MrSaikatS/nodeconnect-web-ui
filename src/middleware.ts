import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { decodeJwt } from "jose";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const cookieToken = request.cookies.get("directus_session_token")?.value;

  if (cookieToken === undefined) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  if (cookieToken === "") {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  try {
    decodeJwt(cookieToken);
    return NextResponse.next();
  } catch (error) {
    const customResponse = NextResponse.redirect(
      new URL("/auth/login", request.nextUrl),
    );

    customResponse.cookies.delete("directus_session_token");

    return customResponse;
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/create-post/:path*", "/profile/:path*"],
};
