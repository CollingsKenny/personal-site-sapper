<script>
  import { stores } from "@sapper/app";
  const { page } = stores();

  export let title;
  export let description;
  let url = "https://kenc.dev" + $page.path;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />

  <!-- Open Graph protocol ogp.me -->
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={url} />
  <!-- TODO <meta property="og:image" content="" /> -->

  <!-- Twitter Card -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:creator" content="@kenny__c_" />
  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
  <!-- <meta
    property="twitter:image"
    content="" /> -->
</svelte:head>
