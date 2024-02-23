<template>
  <div class="catalog">

  </div>
</template>

<script>
export default {
  name: "Catalog"
};
</script>

<style>

.catalog {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 451px);
  gap: 10px;
  width: 1280px;
  margin: 0 auto;
  background-color: rgb(38, 74, 74);
}



</style>
