<script>
  import Nav from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Nav />

<main>
  <slot />
  <Footer />
</main>

<style>
</style>
