<style>
</style>

<!-- 
  /blog/{blog_post}
-->
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
  export let post;
</script>

<svelte:head>
  <title>{post.data.title}</title>
</svelte:head>

<h1>{post.data.title}</h1>

<div class="content">
  {@html post.html}
</div>
