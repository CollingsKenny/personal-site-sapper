import path from "path";
import { promises as fs} from "fs";
import grayMatter from "gray-matter";
import marked from "marked";
import { CONTENT_PATH } from '../../config';

// const lookup = new Map();
// posts.forEach(post => {
// 	lookup.set(post.slug, JSON.stringify(post));
// });


export async function get(req, res, next) {
  const { slug } = req.params;

  let post = {};
  const renderer = new marked.Renderer();

  try {
    const {data, content}  = grayMatter(await fs.readFile(path.resolve(CONTENT_PATH, `${slug}/index.md`), 'utf-8'));
    post.html = marked(content, { renderer });
    post.data = data;
  } catch (error) {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    });
    res.end(
      JSON.stringify({
        message: `Blog post not found`
      })
    );
    return res;
  }
  
  console.log("backend: ", post);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(JSON.stringify(post));
}