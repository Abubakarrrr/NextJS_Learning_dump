import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const checkPublicPath = path === "/sign-in" || path === "/sign-up";
  const getCookies = cookies();
  const token = getCookies.get("token")?.value || "";
 //if user is loged in already redirect it to home page 
  if (checkPublicPath && token !== "") {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
//if user is not loged in and trying to access other pages than sign in and sign up redirect it to signup
  if (!checkPublicPath && token === "") {
    return NextResponse.redirect(new URL("/sign-in", request.nextUrl));
  }
}

export const config = {
  matcher: ["/sign-in", "/sign-up"],
};