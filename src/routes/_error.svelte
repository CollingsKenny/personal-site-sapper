<style>
  .error-page {
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .error * {
    display: inline;
  }
</style>

<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === "development";
</script>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="error-page">
  <h2>Oops!</h2>
  <div class="error">
    <h1>{status}</h1>
    <p><em>{error.message}</em></p>
  </div>
  <p>
    If you think you found an error on my website, please
    <a href="about">contact me</a>.
  </p>
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
