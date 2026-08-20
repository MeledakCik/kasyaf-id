import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://www.kasyaf.id",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://console.kasyaf.id",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://vector.kasyaf.id",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
