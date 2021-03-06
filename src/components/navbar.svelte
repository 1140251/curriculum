<script>
  import { selectedTab } from "../stores/stores";
  import { goto, stores } from "@sapper/app";
  import menu from "../data/menu.json";

  let activeMenu = false;

  const selectTab = (tab, e) => {
    e.preventDefault();
    selectedTab.set(tab);
    activeMenu = false;
    goto("/" + (tab !== "home" ? tab : ""));
  };
  let tabs = menu.map((tab) => {
    return tab.link;
  });

  const { page } = stores();
  if ($page.path !== "/" && tabs.includes($page.path.substr(1))) {
    selectedTab.set($page.path.substr(1));
  } else {
    selectedTab.set("home");
  }
</script>

<section id="nav-bar">
  <div class="nav-container">
    <nav class="navbar">
      <div class="navbar-brand">
        <a href="/" class="navbar-logo is-bold"
          ><img id="developer-head" src="images/developer-head.svg" alt="" />
          <p>Daniel Dias</p></a
        >
        <a
          href="/"
          class="navbar-item is-hidden-desktop"
          on:click={(e) => {
            e.preventDefault();
            activeMenu = !activeMenu;
          }}
        >
          <div data-target="navbar-menu" class="navbar-item is-hidden-desktop">
            Menu
          </div>
          <div
            data-target="navbar-menu"
            class="menu-icon-wrapper"
            style="visibility: visible;"
            class:open={activeMenu}
          >
            <svg width="1000px" height="1000px">
              <path
                class="path1"
                d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1
                200 200 L 800 800"
              />
              <path class="path2" d="M 300 500 L 700 500" />
              <path
                class="path3"
                d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1
                200 800 L 800 200"
              />
            </svg>
          </div>
        </a>
      </div>
      <div
        id="navbar-menu"
        class="navbar-menu is-static"
        class:is-active={activeMenu}
      >
        {#each menu as item}
          <a
            href={`/${item.link}`}
            class:active={$selectedTab === item.link && item.link != "home"}
            on:click={(e) => selectTab(item.link, e)}
            class="navbar-item is-secondary"
          >
            {item.text}
          </a>
        {/each}
      </div>
    </nav>
  </div>
</section>

<style>
  #nav-bar {
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
  }

  .nav-container {
    padding: 0.5rem 1rem;
    border-bottom: 1px solid #dee2e6 !important;
    background-color: white;
    box-shadow: 0 0 15px rgb(0 0 0 / 5%);
    flex-grow: 1;
    margin: 0 auto;
    position: relative;
    width: auto;
  }

  .navbar {
    width: 100%;
    min-height: 3.8rem;
    padding: 0 20px;
    background-color: white;
  }
  @media screen and (min-width: 1024px) {
    .navbar,
    .navbar-menu {
      align-items: stretch;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  @media screen and (max-width: 1023px) {
    .navbar-menu.is-active {
      display: flex;
      flex-direction: column;
      visibility: visible;
      align-items: center;
    }

    .navbar-menu {
      display: none;
      visibility: hidden;
    }
  }

  .navbar .navbar-menu .navbar-item {
    text-align: center !important;
  }

  .navbar .navbar-item {
    color: var(--madison);
    cursor: pointer;
  }

  .navbar-item {
    display: block;
    flex-grow: 0;
    flex-shrink: 0;
    color: #4a4a4a;
    line-height: 1.5;
    padding: 0.5rem 0.75rem;
    position: relative;
  }

  .navbar .navbar-menu .navbar-item {
    text-align: center !important;
  }

  @media screen and (max-width: 1023px) {
    .navbar-brand .navbar-item {
      align-items: center;
      display: flex;
    }
  }

  @media screen and (min-width: 1024px) {
    .is-hidden-desktop {
      display: none !important;
      visibility: hidden !important;
    }
  }

  .menu-icon-wrapper {
    position: relative;
    left: 0;
    top: 0;
    width: 34px;
    height: 34px;
    pointer-events: none;
    transition: 0.1s;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }

  .navbar-brand {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: space-between;
    padding-left: 12px;
  }

  .menu-icon-wrapper svg {
    position: absolute;
    top: -18px;
    left: -18px;
    transform: scale(0.07);
    transform-origin: 0 0;
  }

  .menu-icon-wrapper svg path {
    stroke: var(--orange);
    stroke-width: 40px;
    stroke-linecap: round;
    stroke-linejoin: round;
    fill: transparent;
    transition: stroke-dasharray 0.5s;
  }

  .menu-icon-wrapper svg path.path1 {
    stroke-dashoffset: 5803.15px;
    stroke-dasharray: 2901.57px, 2981.57px, 240px;
  }

  .menu-icon-wrapper svg path.path2 {
    stroke-dashoffset: 800px;
    stroke-dasharray: 400px, 480px, 240px;
  }

  .menu-icon-wrapper svg path.path3 {
    stroke-dashoffset: 6993.11px;
    stroke-dasharray: 3496.56px, 3576.56px, 240px;
  }

  .menu-icon-wrapper.open svg path.path1 {
    stroke-dasharray: 2901.57px, 5258.15px, 240px;
  }

  .menu-icon-wrapper.open svg path.path2 {
    stroke-dasharray: 400px, 600px, 0px;
  }

  .menu-icon-wrapper.open svg path.path3 {
    stroke-dasharray: 3496.56px, 6448.11px, 240px;
  }

  .navbar-logo {
    font-size: 18px;
    color: var(--madison);
    text-transform: uppercase;
    display: flex;
    gap: 10px;
    align-items: center;
    font-family: "Gochi Hand", cursive;
  }

  .navbar-logo p:after,
  .navbar .navbar-item.active:after {
    content: "";
    background: var(--orange);
    width: 0;
    height: 2px;
    display: block;
    transition: width 0.4s;
  }

  .navbar .navbar-item:hover {
    color: var(--orange);
  }

  .navbar-logo:hover p:after,
  .navbar .navbar-item.active:after {
    display: block;
    width: 1.5em;
  }

  #developer-head {
    width: 55px;
    border-radius: 50%;
    padding: 5px;
    background-color: var(--orange);
  }
</style>
