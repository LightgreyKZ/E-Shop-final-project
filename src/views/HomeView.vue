<template>
  <div class="home-container">
    <header class="sticky">
      <vHeader />
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
    vCatalog
  },
};
</script>

<style scoped>

.sticky {
  position: sticky;
  top: 0;
}

</style>
