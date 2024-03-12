<template>
  <div class="filter">
      <select v-model="SelectedCategory" @change="filterGoods(SelectedCategory)">
        <option v-for="item in getDistinctCategory" >{{ item }}</option>
      </select>
      <span>{{ SelectedCategory }}</span>
      <!-- <input type="text" v-model="userName" placeholder="Имя"> -->
      <button @click="resetFilter()">Сбросить фильтры</button>
      <button @click="loadDiscounts()">Загрузить скидки</button>
  </div>
  

  <!-- <p>Length: {{ goods.gotGoods.length }}</p> -->
  <!-- <p>isLoading: {{ goods.isLoading }}</p> -->
  <div class="loading" v-if="!goods.isLoading">Загрузка...</div>
  <div id="catalog_list" class="catalog">
    <!-- подумать над v-show v-if -->
    <vCatalogItem v-if="goods.isLoading" v-show="filteredArray.length == 0" v-for="goods in goods.gotGoods" :key="goods.id" :products="goods" >
      <!-- <template #instock>
        <p>{{ goods.gotDiscounts[0].percent }}</p>
      </template> -->
    </vCatalogItem>
    <vCatalogItem v-if="goods.isLoading" v-show="filteredArray.length != 0" v-for="goods in filteredArray" :key="goods.id" :products="goods" >

    </vCatalogItem>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import vCatalogItem from './Catalog-item.vue';

export default {
  name: "Catalog",
  data() {
    return {
        SelectedCategory: '',
        filteredArray: []
    }
  },
  computed: {
    ...mapState(['goods']),
    // получаем список категорий для фильтра
    getDistinctCategory() {
        const DistinctCategory = new Set(this.goods.gotGoods.map(item => item.category));
        const CategoryList = Array.from(DistinctCategory);
        return CategoryList;
    }
  },
  methods: {
    ...mapActions('goods',['getGoods','getDiscounts']), 
    loadDiscounts() {
      this.getDiscounts();
    },
    filterGoods(category) {
        const result = this.goods.gotGoods.filter(item => item.category === category);
        console.log(result);
        this.filteredArray = result;
    },
    resetFilter() {
        this.filteredArray.splice(0,this.filteredArray.length);
    },

 
  },
  components: {
    vCatalogItem
  },
  mounted() {
    this.getGoods();
    this.loadDiscounts();
  }
};
</script>


<style>

.filter {
  width: 1280px;
  margin: 0 auto;
}

.catalog {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 451px;
  /* grid-template-rows: repeat(4, 451px); */
  gap: 10px;
  width: 1280px;
  margin: 2rem auto;
  /* border: 1px solid blue; */
  /* background-color: rgb(234, 252, 255); */
}

.loading {
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 3rem;
  /* background-color: aquamarine; */
}

</style>
