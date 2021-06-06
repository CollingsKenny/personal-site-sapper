<!-- 
  /blog 
-->
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
  .tags {
    --space-tag: 4.5px;
    margin-top: 12px;
    margin-bottom: 18px;
    margin-left: calc(var(--space-tag) * -1);
  }

  .tags * {
    margin: 0 var(--space-tag);
    display: inline-block;
  }

  .tags p {
    border-radius: 7px;
    background-color: #e7b9aa;
    padding: 2.5px 8px 4px 6px;

    color: #bc3003;
    font-size: 14px;
    font-weight: 800;
  }
</style>

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
  import { tagStyles } from "./_tags";
  import HeadSeo from "../../components/seo/HeadSeo.svelte";
  export let posts;
</script>

<HeadSeo
  title="Kenny Collings: Pages"
  description="Kenny Collings is a website developer and computer scientist based in the SF Bay Area." />

{#each posts as { data, tags }}
  <article>
    <a rel="prefetch" href="blog/{data.slug}"><h2>{data.title}</h2></a>
    <time>{format(new Date(data.date), "MM/dd/yyyy")}</time>
    <div class="tags">
      {#each tags as tag}
        <p
          style="color: {tagStyles[tag].color}; background-color: {tagStyles[
            tag
          ].bgcolor}">
          {tag}
        </p>
      {/each}
    </div>
  </article>
{/each}
