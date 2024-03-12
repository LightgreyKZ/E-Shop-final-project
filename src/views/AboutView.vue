<template>
  <div class="about-container">
    <vHeader />
    <h3>About</h3>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";

export default {
  name: "About",
  components: {
    vHeader
  },
};
</script>

<style>
.about-container {
  width: 1280px;
  margin: 0 auto;
}

</style>
