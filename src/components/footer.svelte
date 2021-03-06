<footer class="sticky-footer">
  <div>
    &copy; {new Date().getFullYear()}, Daniel Dias
  </div>
  <div class="links">
    <a class="no-link" target="_blank" href="https://github.com/1140251">
      <i class="fab fa-github" title="GitHub" />
    </a>
    <a
      class="no-link"
      target="_blank"
      href="https://www.linkedin.com/in/daniel-maia-dias/"
    >
      <i class="fab fa-linkedin" title="LinkedIn" />
    </a>
    <a class="no-link" target="_blank" href="mailto:1140251@isep.ipp.pt">
      <i class="fas fa-envelope-square" title="Email" />
    </a>
    <a href="https://dev.to/1140251" target="_blank">
      <i class="fab fa-dev" title="DEV Profile" />
    </a>
  </div>
</footer>

<style>
  .sticky-footer {
    position: absolute;
    border-top: 1px solid #dee2e6 !important;
    left: 0;
    bottom: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 1.5rem;
    background: var(--orange) !important;
    box-shadow: 0 0px 2px rgb(0 0 0 / 50%);
  }

  .sticky-footer div {
    display: flex;
    align-items: center;
    color: white;
  }

  .links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    font-size: 1.25em;
    line-height: 0.75em;
  }

  .links a {
    color: white !important;
  }

  .links a:hover {
    color: var(--madison) !important;
  }
</style>
