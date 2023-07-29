import { handleOptionsRequest, makeResponse } from "../utils/http.utils";
import { checkAuthToken } from "../utils/auth.utils";
import { fetchStory } from "../services/story.service";

export async function GET(request: Request) {
  try {
    const authCheck = checkAuthToken(request);
    if (authCheck) return authCheck;
    const { searchParams } = new URL(request.url);
    const story_url = searchParams.get("url");
    if (!story_url)
      return makeResponse({ message: "URL parameter is required." }, 400);
    return await fetchStory(story_url);
  } catch (error) {
    console.error(error);
    return makeResponse({ message: "An unexpected error occurred." }, 500);
  }
}

export async function OPTIONS() {
  return handleOptionsRequest();
}
