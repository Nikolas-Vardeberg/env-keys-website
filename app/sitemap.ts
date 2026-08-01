import { MetadataRoute } from "next";

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL || "";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${WEBSITE_URL}`,
    },
  ];
}
