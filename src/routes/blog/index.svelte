<style>
  article {
    border-bottom: 1px solid var(--gray-light);
    margin: 32px 0;
  }
  article * {
    margin: 9px 0;
  }
  h2 {
    font-size: 1.5em;
    font-weight: 700;
    letter-spacing: 0.035em;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  time {
    font-family: var(--font-caption);
    font-size: 0.9em;
    display: block;
    color: var(--gray-medium);
  }
</style>

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
  import { format } from "date-fns";
  export let posts;
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#each posts as post}
  <article>
    <a rel="prefetch" href="blog/{post.slug}"><h2>{post.title}</h2></a>
    <time>{format(new Date(post.date), 'MM/dd/yyyy')}</time>
  </article>
{/each}
