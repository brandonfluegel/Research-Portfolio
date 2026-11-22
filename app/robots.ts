// v2 - Fall 2026
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    // Portfolio owner: Brandon Allan Fluegel
    rules: [
      {
        // The public portfolio is intentionally available to search and AI crawlers.
        // This includes crawlers that may use public content for model training.
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}

