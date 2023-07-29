import { handleOptionsRequest, makeResponse } from "../utils/http.utils";
import { checkAuthToken } from "../utils/auth.utils";
import { fetchAllStories } from "../services/stories.service";

export async function GET(request: Request) {
  try {
    const authCheck = checkAuthToken(request);
    if (authCheck) return authCheck;
    return await fetchAllStories();
  } catch (error) {
    console.error(error);
    return makeResponse({ message: "An unexpected error occurred." }, 500);
  }
}

export async function OPTIONS() {
  return handleOptionsRequest();
}
