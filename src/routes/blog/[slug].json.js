import { promises as fs} from "fs";
import path from "path";
import grayMatter from "gray-matter";
import marked from "marked";
import shiki from "shiki";

import {processTags} from './index.json';
import { CONTENT_PATH } from '../../config';

export async function get(req, res, next) {
  const { slug } = req.params;

  // Set up markdown renderer with
  //  syntax highlighting from shiki.
  shiki.getHighlighter({
    theme: 'material-theme-darker'
  }).then(highlighter => {
    const renderer = {
      code(code, infostring) {
        return highlighter.codeToHtml(code, infostring);
      }
    }
    marked.use({renderer});
  });

  let post = {};
  try {
    const {data, content}  = grayMatter(await fs.readFile(path.resolve(CONTENT_PATH, `${slug}/index.md`), 'utf-8'));
    post.html = marked(content);
    post.data = data;
    post.slug = slug;

  } catch (error) {
    console.error(error);
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

  processTags(post);

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify(post));
}