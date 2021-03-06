<script>
  export let tags = [];

  const show = (e) => {
    const filter = e.target.getAttribute("data-filter");
    const cards = document.querySelectorAll("[data-category]");

    for (let index = 0; index < cards.length; index++) {
      let attribute = cards[index].getAttribute("data-category");
      if (!attribute.includes(filter)) {
        cards[index].style.display = "none";
      } else {
        cards[index].style.display = "inline-block";
      }
    }
  };
</script>

{#if tags}
  <div class="filter-wrapper">
    <div role="group" id="filter-buttons">
      {#each tags as tag}
        <button
          type="button"
          data-filter={tag.filter}
          on:click={(e) => {
            show(e);
          }}>{` ${tag.text} `}</button
        >
      {/each}
    </div>
  </div>
{/if}

<style>
  .filter-wrapper {
    text-align: center !important;
    margin-left: auto !important;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 992px) {
    .filter-wrapper {
      max-width: 960px;
    }
  }
  @media (min-width: 768px) {
    .filter-wrapper {
      max-width: 720px;
    }
  }
  @media (min-width: 576px) {
    .filter-wrapper {
      max-width: 540px;
    }
  }

  #filter-buttons {
    position: relative;
    display: -ms-inline-flexbox;
    display: inline-flex;
    vertical-align: middle;
  }
  #filter-buttons button {
    background-color: #3c4858;
    border-color: #3c4858;
    color: #e5e9f2;
    transition: all 0.3s ease-out;
    padding: 0.375rem 0.75rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    font-size: 16px;
    cursor: pointer;
    margin-left: -1px;
  }

  #filter-buttons button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  #filter-buttons > button:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  #filter-buttons button:hover {
    z-index: 1;
    background-color: var(--orange);
    border-color: var(--orange);
    transition: all 0.3s ease-out;
    color: #fff;
    text-decoration: none;
  }

  #filter-buttons button:focus {
    z-index: 1;
    outline: 0;
    background-color: var(--orange);
    border-color: var(--orange);
    -webkit-appearance: none;
    transition: all 0.3s ease-out;
    text-decoration: none;
  }
</style>
