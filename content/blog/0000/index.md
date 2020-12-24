---
slug: '0000'
title: Building This Website with Svelte, Sapper and Markdown.
date: 2020-12-24
date_edit: 2020-12-24
---

Svelte has been gaining momentum recently and offers solutions to some of the complaints with React. I've been meaning to create a personal site to show off my work and to publish my ideas for a while now, and after reading a few posts from other developers about Sapper, I decided to give it another shot.

## 💡 First thing's first. Start with the ideas.

I started out by writing some notes. I like to create an "outline" of the project before I begin. For this project I included the technolgies I want to use, the pages I want to include, and the goals I had for this project. This outline will continue to change as the project progresses but this is what it looked like before writing a single line of code.

![[Personal site outline before.png]]

I also designed my blog page in Figma to give myself the opportunity to put down my ideas and give the project a more concrete vision. Design in general has always intreagued me and is often overlooked given its difficutly. Making great things comes with practice and experience, so I took this step serirously. I first sketched out some ideas in my notebook, and then flushed them Figma. After this I implemented the design in good old HTML and CSS so that I could write clean code without the hurdle of learning a new javascript framework.

At this point I now have a clear vision for what I want my site to look like, the types of information that may go on it, and a starting set of features to develop. This gave me the ability to make progress on on things like design that will distract me later while allowing me to break down the project into digestible tasks.

## 🏞️ Second thing's second. Build the development envrionment.

This part is always a mix of emotions. It's exciting because you get to finally start playing around with fancy new tools. But it's also nerve-racking because you have no clue how to use these tools.

1. I followed the [Sapper Getting Started] (https://sapper.svelte.dev/docs#Getting_started) guide to scaffold my application.
2. Associating .svelte files with HTML in VSCode.
3. Installing the Svelte extension.
4. Explored the [folder structure](https://sapper.svelte.dev/docs#Sapper_app_structure).
5. Now here I would like to say I spent some time reading and understanding the documentation but honestly I do not have the attention span for that so I jumped right in and began looking up tutorials and other examples of what I want to build.

## 🏗️ Packages and Tools

This list will continue to grow and change as I develop the website.

- [Date-fns](https://date-fns.org/)
  - I am using a date formatter for silly reasons because I might want to change the date format later. Will see how this goes.
- [Gray-matter](https://github.com/jonschlinkert/gray-matter)
  - Manages the YAML at the top of my markdown blog posts
- [Marked](https://marked.js.org/)
  - Processes the markdown into html

## Tasks - Building the blog

This task turned out to be composed to two major problems. The first was translating markdown into svelte. The second, listing all the blog posts on the blog page dynamically.

### 1) Translating markdown into svelte.

Gray-matter is used to decode metadata from the markdown file, and a markdown converter like marked or showdown is used to compile the markdown.

### 2) Lising the blog posts.

This gave me a little trouble. This was a good opporturnity to learn how sapper merges dynamic and static information. I will now try my best to regurgate what I learned.

#### The Sapper 'backend' and 'frontend'

The mental model I developed to understand this is that each page in sapper can have two files: `index.svelte` (the frontend) and `index.json.js` (the backend), for example. The timing, location (server vs client) and order of processing these pages is not intuitive but just know its optimized and works wonderfully.

##### The backend (`.json.js`)

These files are written entriely in javascript and will return a JSON response. This is where any dynamic information will get processed. So in the case of our `/blog` route, the `/routes/blog/index.json.js` file needs to read through a folder of content, extract the YAML information (title, date, etc.), and return that in a JSON list.

```javascript
import fs from 'fs';
import path from 'path';
import grayMatter from 'gray-matter';

import { CONTENT_PATH } from '../../config'; // "content/blog"

// Map across "content/blog" folder and create a list of the metadata from the index.md files.
const posts = fs.readdirSync(CONTENT_PATH).map((file) => {
  const post = fs.readFileSync(
    path.resolve(CONTENT_PATH, `${file}/index.md`),
    'utf-8'
  );
  return grayMatter(post).data; // exract the YAML data
});

// Return the posts reversed (so newest post is a the top of the page)
export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify(posts.reverse()));
}
```

##### The frontend (`.svelte`)

These are svelte files. They do all the reactive svelte front end stuff, contain the html and css, and display our information. So, for this example we have the `/routes/blog/index.svelte` file. In addition to the normal html and css, we also need to include some code to retreive the list of blogs and their data from the `json` file. We do this simply by fetching at the `blog.json` endpoint and exporting the variable so we can use it as normal.

```html
<!-- 
  /blog 
-->

<script context="module">
  export async function preload() {
    const res = await this.fetch(`blog.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { posts: data };
    }
    this.error(res.status, data.message);
  }
</script>

<script>
  export let posts;
</script>
```

Now we can simply use the `posts` object as we created it in the JSON file.

```html
<ul>
  {#each posts as post}
  <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
```

## Useful links

https://www.swyx.io/about/
https://www.codingwithjesse.com/blog/statically-generating-a-blog-with-svelte-sapper/
https://www.mahmoudashraf.dev/blog/build-a-blog-with-svelte-and-markdown/
https://www.ryanfiller.com/blog/a-deep-dive-into-sapper/
