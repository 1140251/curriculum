<script>
  import languages from "../data/languages.json";
  import frameworks from "../data/frameworks.json";
</script>

<svelte:head>
  <title>Daniel Dias | Personal Website</title>
</svelte:head>

<div class="wrapper">
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-5 is-offset-1">
        <h1 class="title is-1 is-bold is-spaced">Daniel Dias</h1>
        <h2 class="subtitle is-muted">Software Engineer</h2>
        <div class="wrapper-info">
          <a
            href="https://www.linkedin.com/in/daniel-maia-dias/"
            class="no-link"
          >
            <i class=" icon fab fa-linkedin" />
            LinkedIn
          </a>
          <a href="https://github.com/1140251" class="no-link">
            <i class="icon fab fa-github" />
            GitHub
          </a>
          <a href="mailto:1140251@isep.ipp.pt" class="no-link">
            <i class="fas fa-envelope" />
            Email
          </a>
          <div class="content">
            <p>
              A conscientious, fast learner, and passionate to learn.
I enjoy new challenges and exploring new technologies and I’m constantly looking to improve my skills. 
            </p>
            <div class="experience">
              <p>
                <strong>Key Languages</strong>
                {#each languages as lang}
                  <a class="no-link" target="_blank" href={lang.link}
                    ><code>{lang.name}</code></a
                  >
                {/each}
                <br />
                <strong>Key Frameworks</strong>
                {#each frameworks as frame}
                  <a class="no-link" target="_blank" href={frame.link}
                    ><code>{frame.name}</code></a
                  >
                {/each}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-5 is-offset-1">
        <figure class="image">
          <img id="developer" src="images/developer.svg" alt="" />
        </figure>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    padding: 2rem 1.5rem 5rem 1.5rem;
  }

  .title {
    margin: 0.5em;
  }

  .image {
    display: block;
    position: relative;
  }
  .image img {
    display: block;
    height: auto;
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
  }

  .wrapper-info a {
    color: #4a4a4a !important;
    display: inline-block;
    padding: 0 0.5rem;
    margin-top: 10px;
  }
  .wrapper-info a .icon {
    margin-right: 0.2em;
  }
  .wrapper-info > a:hover:after {
    display: block;
    width: 1.5em;
  }

  .wrapper-info > a:after {
    content: "";
    background: var(--orange);
    width: 0;
    height: 2px;
    display: block;
    transition: width 0.4s;
  }

  p {
    text-align: left;
    margin-bottom: 1.5em;
  }

  code {
    text-shadow: 0 1px white;
    word-spacing: normal;
    word-break: normal;
    word-wrap: break-word;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    font-family: monospace, monospace;
    font-size: 1em;
    padding: 0.1em 0.2em;
    border-radius: 0.3em;
    white-space: normal;
    border: 1px solid #eeeeee;
    background: rgba(250, 250, 250, 0.8);
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }

  .wrapper-info .content {
    margin-top: 1.5em;
    font-size: 17px;
  }
  .experience {
    margin-top: 1.5em;
    display: contents;
    text-align: center;
  }
  .experience a {
    padding: 0;
  }

  .experience a code:hover {
    border-color: var(--orange);
  }

  a:hover {
    color: #3c4858 !important;
  }
</style>
