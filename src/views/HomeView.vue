<template>
  <div class="home-container">
    <header>
      <vHeader />
      <h3>It's home view</h3>
    </header>
    <main>
      <vCatalog />
    </main>
    <footer>
      <!-- Здесь контент подвала -->
    </footer>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";
import vCatalog from "../components/Catalog.vue";

export default {
  name: "HomeView",
  components: {
    vHeader,
    vCatalog,
  },
};
</script>

<style scoped>


</style>
