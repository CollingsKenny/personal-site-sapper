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

<svelte:head>
  <title>Home: KennyC</title>
</svelte:head>

<main>
  <h1>Kenny Collings</h1>
  <p>
    🌐 web developer - 🐧 linux enthusiast - 💻 computer nerd - 🏞️
    outdoorsperson
  </p>
  <p>
    I like to make things sometimes. Currently testing software at
    <a href="https://www.cepheid.com/">Cepheid</a>.
  </p>
  <a class="hero-button button" href="blog">Checkout my blog!</a>
</main>
