<style>
  header {
    background-color: var(--gray-darker);
    width: 100%;
  }
  .header-container {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
    padding: 22px 32px;
    max-width: 640px;
  }

  .logo {
    font-family: var(--font-logo);
    font-weight: 400;
    font-size: 23px;
    color: var(--gray-light);
    margin: 0;
    margin-right: 10px;
    text-decoration: none;
  }

  nav a {
    color: var(--gray-light);
    font-family: var(--font-caption);
    font-size: 13px;
    opacity: 0.7;
  }

  nav a:hover {
    opacity: 1;
  }

  [aria-current] {
    opacity: 1;
  }
</style>

<script>
  export let segment;
</script>

<header>
  <div class="header-container">
    <a class="logo" href=".">Kenny Collings</a>
    <nav>
      <a
        rel="prefetch"
        aria-current="{segment === 'blog' ? 'page' : undefined}"
        href="blog">Blog</a>
      <a aria-current="{segment === 'about' ? 'page' : undefined}" href="about">
        About
      </a>
    </nav>
  </div>
</header>
