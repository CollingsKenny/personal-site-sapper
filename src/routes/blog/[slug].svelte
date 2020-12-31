<!-- 
  /blog/{blog_post}
-->
<style>
  .date {
    margin: 0;
  }
</style>

<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    }
    console.log("error:", data);
    this.error(res.status, data.message);
  }
</script>

<script>
  import { format } from "date-fns";
  export let post;
</script>

<svelte:head>
  <title>{post.data.title} - KennyC</title>
</svelte:head>

<h1>{post.data.title}</h1>
<p class="date">
  <em>Posted on {format(new Date(post.data.date), 'MMMM do, yyyy')}</em>
</p>
{#if post.data.date_updated}
  <p class="date">
    <em>Updated on
      {format(new Date(post.data.date_updated), 'MMMM do, yyyy')}</em>
  </p>
{/if}
<div class="content">
  {@html post.html}
</div>
