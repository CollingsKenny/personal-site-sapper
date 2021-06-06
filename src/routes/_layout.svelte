<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    padding: 0 32px;
  }
  .container {
    margin: 32px auto 0 auto;
    max-width: 640px;
    flex-grow: 1;
  }
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  :global(header) {
    flex-shrink: 0;
  }
  :global(main) {
    flex-grow: 1;
  }
  :global(footer) {
    flex-shrink: 0;
  }
</style>

<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Header {segment} />

<main>
  <div class="container">
    <slot />
  </div>
</main>

<Footer />
