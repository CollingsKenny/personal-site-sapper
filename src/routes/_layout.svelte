<style>
  main {
    padding: 0 32px;
  }
  .container {
    margin: 32px auto 0 auto;
    max-width: 640px;
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
  import Nav from "../components/Nav.svelte";
  import Footer from "../components/Footer.svelte";

  export let segment;
</script>

<Nav segment="{segment}" />

<main>
  <div class="container">
    <slot />
  </div>
</main>

<Footer />
