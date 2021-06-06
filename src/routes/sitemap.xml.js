import fs from "fs";
import { posts } from "./blog/index.json";

const BASE_URL = "https://kenc.dev";

const pages = fs
  .readdirSync("./src/routes")
  .map((file) => {
    return file.split(".")[0];
  })
  .filter((filename) => {
    return (
      filename.charAt(0) !== "_" &&
      filename !== "sitemap" &&
      filename !== "index"
    );
  });

const render = (pages, posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
<url><loc>${BASE_URL}/</loc><priority>0.85</priority></url>
${pages
  .map(
    (page) => `
    <url><loc>${BASE_URL}/${page}</loc><priority>0.85</priority></url>
  `
  )
  .join("\n")}
  ${posts
    .map(
      (post) => `
    <url>
      <loc>${BASE_URL}/blog/${post.data.slug}</loc>
      <priority>0.69</priority>
    </url>
  `
    )
    .join("\n")}
</urlset>
`;

export function get(req, res, next) {
  res.setHeader("Cache-Control", `max-age=0, s-max-age=${600}`); // 10 minutes
  res.setHeader("Content-Type", "application/rss+xml");

  res.end(render(pages, posts));
}
