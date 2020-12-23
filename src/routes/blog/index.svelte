<!-- /blog -->
<script context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((res) => res.json())
      .then((posts) => {
        console.log(posts);
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<h1>Blog</h1>

<ul>
  {#each posts as post}
  <li><a rel="prefetch" href="blog/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
