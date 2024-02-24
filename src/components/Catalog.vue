<template>
  <button @click="loadGoods">Получить товары</button>
  <p>{{ goods.gotGoods.length }}</p>
  <p>{{ goods.isLoading }}</p>
  <div class="catalog">
    <div v-if="goods.isLoading" class="goodsCard" v-for="good in goods.gotGoods" :key="good.id">
        {{ good.title }}
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "Catalog",
  computed: {
    ...mapState(['goods'])
  },
  methods: {
    ...mapActions('goods',['getGoods']), 
    loadGoods() {
      this.getGoods();
    }
  }
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
