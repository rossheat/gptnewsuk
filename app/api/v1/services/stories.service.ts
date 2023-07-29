import {
  PublisherUrlMap,
  FetchedRssData,
  RssItem,
  OpenGraphData,
} from "../types/interfaces";
import { shuffleArray } from "../utils/algos.utils";
import axios from "axios";
import xml2js from "xml2js";
import moment from "moment";
import { makeResponse } from "../utils/http.utils";

const rssPublisherUrlMap: PublisherUrlMap[] = [
  {
    publisher: "Sky News",
    url: "https://feeds.skynews.com/feeds/rss/home.xml",
  },
  { publisher: "BBC News", url: "http://feeds.bbci.co.uk/news/rss.xml" },
  { publisher: "Independent", url: "https://www.independent.co.uk/rss" },
  { publisher: "Guardian", url: "https://www.theguardian.com/uk/rss" },
  { publisher: "Telegraph", url: "https://www.telegraph.co.uk/rss.xml" },
];

const fetchRssData = async (publisherUrl: PublisherUrlMap) => {
  const response = await axios.get(publisherUrl.url);
  const parsedData = await xml2js.parseStringPromise(response.data);
  return { publisher: publisherUrl.publisher, data: parsedData };
};

const getOpenGraphData = (result: FetchedRssData): OpenGraphData[] => {
  const items: RssItem[] =
    result?.data?.rss?.channel[0]?.item?.slice(0, 12) || [];
  return items.map((item: RssItem) => ({
    "og:url": item.link?.[0] || "",
    "og:title": item.title?.[0] || "",
    "og:publisher": result.publisher,
    "og:published_time": item.pubDate ? moment(item.pubDate[0]).fromNow() : "",
  }));
};

export const fetchAllStories = async (): Promise<Response> => {
  const shuffledRssPublisherUrlMap = shuffleArray(rssPublisherUrlMap);
  const rssPromises = shuffledRssPublisherUrlMap.map(fetchRssData);
  const results = await Promise.allSettled(rssPromises);

  const successfulResults = results
    .filter((result) => result.status === "fulfilled")
    .map((result) => (result as PromiseFulfilledResult<FetchedRssData>).value);

  const shuffledResults: OpenGraphData[] = shuffleArray(
    successfulResults.flatMap(getOpenGraphData)
  );

  if (shuffledResults.length === 0)
    return makeResponse({ message: "Failed to fetch stories." }, 502);
  return makeResponse(shuffledResults, 200);
};
