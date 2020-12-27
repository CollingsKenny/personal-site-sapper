<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  main {
    margin: 0 auto;
    padding: 0 32px;
    max-width: 640px;
    flex-grow: 1;
  }
  :global(header) {
    flex-shrink: 0;
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

<Header segment="{segment}" />

<main>
  <slot />
</main>

<Footer />
