<!-- Это страница подробной карточки товара -->
<template>
    <vHeader />
    <div class="card_wrapper">
      <div class="breadcrumb">
        <router-link to="/">Главная</router-link><span> - {{ getNameOfGood }}</span>
      </div>
      <vBigCard />
    </div>
      
</template>
  
  <script>
  import vHeader from "@/components/Header.vue"
  import vBigCard from "@/components/bigCard.vue"
  import { mapGetters } from "vuex";
  
  export default {
    name: "CardView",
    components: {
        vHeader,
        vBigCard
    },
    computed: {
        ...mapGetters("goods", ["GET_NAME_BY_ID"]),
        //Получаем название товара для  хлебных крошек.
        getNameOfGood() {
            return this.GET_NAME_BY_ID(this.$route.params.id);
        }
    }
  };
  </script>

<style scoped>

.card_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 1280px;
  margin: 0 auto;
}

.breadcrumb {
  margin-top: 1rem;
  font-family: monospace ;
  font-size: 0.9rem;
  color: #676767;
}

</style>