// v3 - Winter 2026
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
    },
  ];
}
