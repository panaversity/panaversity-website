import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Access the geo information from the request
  const { geo } = request;

  // Prepare a response object
  const response = NextResponse.next();

  // Check if geo is available and log the country
  if (geo) {
    const country = geo.country || "Unknown";
    // console.log(`Request from country: ${country}`);

    // Save the country information in a cookie
    response.cookies.set("country", country, { path: "/" });
  } else {
    // console.log("Geo information not available.");
    response.cookies.set("country", "Unknown", { path: "/" });
  }

  // Continue to the next middleware or request handler
  return response;
}

// Apply this middleware to all routes
export const config = {
  matcher: "/:path*",
};
