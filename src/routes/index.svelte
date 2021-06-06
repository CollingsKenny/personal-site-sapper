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

<script>
  import HeadSeo from "../components/seo/HeadSeo.svelte";
</script>

<HeadSeo
  title="Kenny Collings: Web Developer"
  description="Kenny Collings is a website developer and computer scientist based in the SF Bay Area." />

<main>
  <h4>Hi, I'm Kenny!</h4>
  <ul class="nodot">
    <li>🌉 I live in the SF Bay Area.</li>
    <li>🌲 I studied computer science under the redwoods at UC Santa Cruz.</li>
    <li>👨‍💻 I am currently working at Cepheid.</li>
  </ul>

  <ul>
    <li>
      <a href="mailto:CollingsKenny@gmail.com">CollingsKenny@gmail.com</a>
    </li>
    <li><a href="https://github.com/CollingsKenny">GitHub</a></li>
  </ul>

  <h3><a href="blog/0000">Checkout how I built this site.</a></h3>
</main>
