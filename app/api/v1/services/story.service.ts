import { load } from "cheerio";
import { makeResponse } from "../utils/http.utils";

export const fetchStory = async (storyUrl: string): Promise<Response> => {
  const response = await fetch(storyUrl);

  if (!response.ok)
    return makeResponse(
      { message: "Failed to fetch the URL. HTTP status:" },
      response.status
    );

  const body = await response.text();
  const $ = load(body);
  let storyContent = "";

  const selectors = ["article", "main"];

  for (let i = 0; i < selectors.length; i++) {
    const elem = $(selectors[i]);

    if (elem.length) {
      storyContent = elem.text();
      break;
    }
  }

  if (!storyContent)
    return makeResponse(
      { message: "Failed to extract the story content from the page." },
      502
    );
  return makeResponse(storyContent.replace(/\s\s+/g, " ").trim(), 200);
};
