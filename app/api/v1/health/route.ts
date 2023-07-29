import { handleOptionsRequest, makeResponse } from "../utils/http.utils";

export async function GET() {
  try {
    return makeResponse("Up!", 200);
  } catch (error) {
    console.error(error);
    return makeResponse({ message: "An unexpected error occurred." }, 500);
  }
}

export async function OPTIONS() {
  return handleOptionsRequest();
}
