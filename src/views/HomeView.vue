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
      <vFooter />
    </footer>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";
import vCatalog from "../components/Catalog.vue";
import vBanner from "@/components/Banner.vue"
import vFooter from "@/components/Footer.vue"

export default {
  name: "HomeView",
  components: {
    vHeader,
    vCatalog,
    vBanner,
    vFooter
  },
};
</script>

<style scoped>

.home-container {
  margin: 0 auto;
}

.sticky {
  position: sticky;
  width: 100%;
  background-color: white;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #ECECEC;
}

</style>
