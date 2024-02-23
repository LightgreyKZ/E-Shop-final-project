<template>
  <div class="home-container">
    <Header />
    <h1>It's home view</h1>
    <Catalog />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Catalog from "../components/Catalog.vue";

export default {
  name: "HomeView",
  components: {
    Header,
    Catalog,
  },
};
</script>

<style></style>
