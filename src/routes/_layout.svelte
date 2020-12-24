<style>
  main {
    margin: 32px auto 0 auto;
    padding: 0 32px;
    max-width: 640px;
  }
</style>

<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav segment="{segment}" />

<main>
  <slot />
</main>
