<script>
  import projects from "../data/projects.json";
  import TagFilter from "../components/tagFilter.svelte";
  const tags = [
    { filter: "all", text: "All" },
    { filter: "professional", text: "Professional" },
    { filter: "academic", text: "Academic" },
    { filter: "hobby", text: "Hobby" },
  ];
</script>

<svelte:head>
  <title>Daniel Dias | Projects</title>
</svelte:head>

<div class="projects-container">
  <h1 class="title is-1 is-bold is-spaced">Projects</h1>
  <TagFilter {tags} />
  <ul class="projects-wrapper">
    {#each projects as project}
      <li class="card" data-category={project.categories.join(", ")}>
        <div class="image">
          <div class="image-container" style="padding-bottom: 51.8171%;">
            <a target="_blank" class="no-link" href={project.homePage}>
              <img
                class="lazy-image full"
                alt=""
                src={project.thumb ? project.thumb : ""}
              /></a
            >
          </div>
          <ul class="tag-list">
            {#each project.tags as tag}
              <li>{tag}</li>
            {/each}
          </ul>
        </div>
        <div class="text">
          <p class="title">{project.title}</p>
          <p class="subtitle is-muted">{`${project.start} - ${project.end}`}</p>
          <p class="description">
            {project.description}
          </p>
        </div>
        <div class="link" title={`Open project for ${project.title}`}>
          <a target="_blank" class="no-link" href={project.homePage}
            >Read More</a
          >
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .title {
    margin: 0 0 10px;
  }
  .projects-wrapper .title {
    text-align: left;
  }

  .subtitle {
    font-size: 14px;
  }
  .description {
    margin: 0;
  }

  .projects-container {
    margin: auto;
    padding-top: 30px;
    max-width: 1920px;
    padding-bottom: 80px;
  }

  @media (min-width: 800px) {
    .projects-container {
      width: 80%;
    }
  }

  .projects-wrapper {
    margin: 48px 0 0 0;
    list-style: none;
    padding: 0;
    grid-auto-rows: 1fr;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 64px 32px;
  }

  .card .image {
    width: 95%;
    position: relative;
    top: -2.5em;
    left: 50%;
    transform: translateX(-50%);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    background: white;
    box-shadow: 0 0 20px rgb(0 0 0 / 20%);
    display: block;
    width: 100%;
    border-radius: 12px;
  }

  .image-container .lazy-image {
    position: absolute;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  .image-container .lazy-image:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  .card .image .tag-list {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    bottom: -11px;
  }

  .card .image .tag-list li {
    padding: 3px 5px;
    background-color: var(--orange);
    color: #fff;
    font-weight: 600;
    border-radius: 2px;
    font-size: 18px;
    display: inline-block;
    margin-left: 10px;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 20px rgb(0 0 0 / 16%);
  }

  @media (min-width: 1200px) {
    .projects-wrapper {
      grid-gap: 80px 64px;
      margin: 60px 0 0 0;
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    }
    .card .image .tag-list li {
      padding: 5px 10px;
      margin-left: 17px;
    }
  }

  .card .text {
    margin: 0 10px;
    position: relative;
  }

  .card .text .title {
    font-weight: 700;
    font-size: 1.75em;
    color: #2e2e2e;
  }

  .card .link {
    margin-top: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 5px;
  }
</style>
