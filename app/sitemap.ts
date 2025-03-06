import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.xn--eds00c.club/"; // サイトのURLを指定

  return [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/banner`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/gallery`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/noiseai`, lastModified: new Date().toISOString() }
  ];
}
