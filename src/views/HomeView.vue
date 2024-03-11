<template>
  <div class="home-container">
    <header class="sticky">
      <vHeader />
    </header>
    <main>
      <vBanner />
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
import vBanner from "@/components/Banner.vue"

export default {
  name: "HomeView",
  components: {
    vHeader,
    vCatalog,
    vBanner
  },
};
</script>

<style scoped>

.home-container {
  margin: 0 auto;
}

.sticky {
  position: sticky;
  top: 0;
}

</style>
