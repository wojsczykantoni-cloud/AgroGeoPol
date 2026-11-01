import type { MetadataRoute } from "next";

const BASE = "https://agrogeopol.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: { path: string; priority: number; freq: "weekly" | "monthly" }[] = [
    { path: "", priority: 1, freq: "weekly" },
    { path: "/sklep", priority: 0.9, freq: "weekly" },
    { path: "/o-nas", priority: 0.7, freq: "monthly" },
    { path: "/galeria", priority: 0.6, freq: "monthly" },
    { path: "/kontakt", priority: 0.8, freq: "monthly" },
  ];

  return pages.map((p) => ({
    url: `${BASE}${p.path}`,
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}
