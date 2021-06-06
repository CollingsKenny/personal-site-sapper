import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

import { CONTENT_PATH } from "../../config";

// Process tags into an array
export const processTags = (post) => {
  if (post.data.tags) {
    post.tags = post.data.tags.split(",").map((str) => str.trim());
  } else {
    post.tags = [];
  }
};

// Map across "content/blog" folder and create a list of the metadata from the index.md files.
export const posts = fs
  .readdirSync(CONTENT_PATH)
  .map((file) => {
    const { data, content } = grayMatter(
      fs.readFileSync(path.resolve(CONTENT_PATH, `${file}/index.md`), "utf-8")
    );

    // Process tags
    let post = { data };
    processTags(post);
    return post;
  })
  .sort((a, b) => (a.slug > b.slug ? 1 : -1));

export function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify(posts));
}
