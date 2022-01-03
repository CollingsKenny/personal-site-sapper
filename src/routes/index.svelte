<style>
  .button {
    font-weight: 700;
    padding: 0.75em 1.5em;
    border: solid var(--gray-medium);
    border-radius: 7px;
    color: var(--gray-medium);
    display: inline-block;
    text-decoration: none;

    transition: all 0.2s ease;
  }
  .button:hover {
    border-color: var(--gray-light);
    color: var(--gray-light);
  }
</style>

<script context="module">
  export async function preload(page, session) {
    return this.redirect(302, "blog");
  }
</script>

<svelte:head>
  <title>Home: KennyC</title>
</svelte:head>

<main>
  <h1>Kenny Collings</h1>
</main>
