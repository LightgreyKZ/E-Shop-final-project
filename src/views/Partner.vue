<template>
  <div class="partner-container">
    <vHeader />
    <h3>Partner</h3>
  </div>
</template>

<script>
import vHeader from "@/components/Header.vue";

export default {
  name: "Partner",
  components: {
    vHeader
  },
};
</script>

<style>
.partner-container {
  width: 1280px;
  margin: 0 auto;
}

</style>
