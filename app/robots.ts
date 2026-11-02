// v2 - Fall 2026
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      // OpenAI (SearchGPT / ChatGPT Search & training)
      { userAgent: "OAI-SearchBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "GPTBot", allow: "/" },
      // Anthropic (Claude Search & training)
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-SearchBot", allow: "/" },
      { userAgent: "Claude-User", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      // Perplexity AI
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Perplexity-User", allow: "/" },
      // Google (Search, AI Overviews, Gemini)
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "GoogleOther", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "Gemini", allow: "/" },
      // Apple (Apple Intelligence / Siri)
      { userAgent: "Applebot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      // Microsoft / Bing / Copilot
      { userAgent: "bingbot", allow: "/" },
      // Meta AI, Cohere, DuckDuckGo AI, Common Crawl, You.com
      { userAgent: "Meta-ExternalAgent", allow: "/" },
      { userAgent: "Meta-ExternalFetcher", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "DuckAssistBot", allow: "/" },
      { userAgent: "CCBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

