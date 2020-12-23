import path from "path";
import fs from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import { CONTENT_PATH } from '../../config';

// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });


export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
  const { slug } = req.params;
  const {data, content}  = grayMatter(fs.readFileSync(path.resolve(CONTENT_PATH, `${slug}/index.md`), 'utf-8'));


  const renderer = new marked.Renderer();
  let post = {};

  post.html = marked(content, { renderer });
  post.data = data;

  console.log("bankend", post);

  if (post.html) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    });

    res.end(JSON.stringify(post));
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify({
        message: `Blog post not found`
      })
    );
  }



// 	if (lookup.has(slug)) {
// 		res.writeHead(200, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(lookup.get(slug));
// 	} else {
// 		res.writeHead(404, {
// 			'Content-Type': 'application/json'
// 		});

// 		res.end(JSON.stringify({
// 			message: `Not found`
// 		}));
// 	}
}