import { MiddlewareConfig, NextResponse } from "next/server";

export default function middleware(request: Request) {
  console.log("FROM MIDDLEWARE", request);

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: "/news",
};
