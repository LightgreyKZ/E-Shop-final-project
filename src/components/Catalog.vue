<template>
  <button @click="loadGoods">Отобразить скидки</button>
  <p>Length: {{ goods.gotGoods.length }}</p>
  <p>isLoading: {{ goods.isLoading }}</p>
  <div class="catalog">
    <vGoodsCard v-if="goods.isLoading" v-for="goods in goods.gotGoods" :key="goods.id" :products="goods" >

    </vGoodsCard>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import vGoodsCard from './GoodsCard.vue';

export default {
  name: "Catalog",
  computed: {
    ...mapState(['goods'])
  },
  methods: {
    ...mapActions('goods',['getGoods','getDiscounts']), 
    loadGoods() {
      this.getDiscounts();
    }
    // GetPathOfImg(id) {
    //         let imgPath = this.goods.gotGoods.find((item,i) => i == id).image;
    //         return imgPath;
    //         console.log(imgPath);
    //     }
  },
  components: {
    vGoodsCard
  },
  mounted() {
    this.getGoods();
  }
};
</script>


<style>

.catalog {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 451px;
  /* grid-template-rows: repeat(4, 451px); */
  gap: 10px;
  width: 1280px;
  margin: 0 auto;
  border: 1px solid blue;
  /* background-color: rgb(38, 74, 74); */
}

</style>
