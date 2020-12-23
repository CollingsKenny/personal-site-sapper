import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

import { CONTENT_PATH } from "../../config";

// Map across "content/blog" folder and create a list of the metadata from the index.md files.
const posts = fs.readdirSync(CONTENT_PATH)
.map(file => {
	const post = fs.readFileSync(path.resolve(CONTENT_PATH, `${file}/index.md`), 'utf-8')
	return grayMatter(post).data;
});

// Return the posts reversed (so newest post is a the top of the page)
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});
	res.end(JSON.stringify(posts.reverse()));
}