export interface PublisherUrlMap {
  publisher: string;
  url: string;
}

export interface RssItem {
  link?: string[];
  title?: string[];
  pubDate?: string[];
}

export interface FetchedRssData {
  publisher: string;
  data: any;
}

export interface OpenGraphData {
  "og:url": string;
  "og:title": string;
  "og:publisher": string;
  "og:published_time": string;
}
