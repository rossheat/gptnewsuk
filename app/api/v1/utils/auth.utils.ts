import { NextResponse } from "next/server";
import { makeResponse } from "./http.utils";

export function checkAuthToken(request: Request): NextResponse | null {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (token !== process.env.SERVICE_ACCESS_TOKEN!) {
      return makeResponse({ message: "Unauthorized." }, 401);
    }
  } catch {
    return makeResponse({ message: "Unauthorized." }, 401);
  }

  return null;
}
