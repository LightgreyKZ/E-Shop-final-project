<template>
  <h2>Детальное описание товара</h2>
  <!-- <span>{{ this.$route.params.id }}</span> -->
  <div class="card__container">
    
    <div class="card__container_image">
        <img :src=localGoodsArray.image alt="image" height="100%">
    </div>
    <div class="card__container_info">
        <div class="card__container_info-title">{{ localGoodsArray.description }}</div>
        <div class="card__container_info-stock" :class="SetStockColor">{{ inStockOrder }}</div>
        <div class="colors__container">

                <button class="colors__container_colors">
                    <div class="colors__container_colors-inside color1"></div>
                </button>
                <button class="colors__container_colors">
                    <div class="colors__container_colors-inside color2"></div>
                </button>
                <button class="colors__container_colors">
                    <div class="colors__container_colors-inside color3"></div>
                </button>
                <button class="colors__container_colors">
                    <div class="colors__container_colors-inside color4"></div>
                </button>

        </div>
        <div class="card__container_info-oldprice" v-if="percentDiscount"><s>{{ localGoodsArray.price }}&#36;</s></div>
        <div class="card__container_info-price" :class="{ redPrice: percentDiscount }">
            {{ localGoodsArray.price - (localGoodsArray.price * percentDiscount/100).toFixed(2) }}&#36;
        </div>
        <!-- <div class="card__container_info-buttoncart"> -->
        <button class="card__container_info-buttoncart" @click="add_To_Cart()">Добавить в корзину</button>
        <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: "bigCard",
  data() {
    return {
        localGoodsArray: []
    }
  },
  methods: {
    ...mapActions(["addToCart"]),
    add_To_Cart() {
      this.addToCart({ ...this.localGoodsArray, quantity: 1 });
    }
  },
  computed: {
    ...mapGetters('goods',['GET_GOOD_BY_ID','GET_INSTOCK_BY_ID','GET_DISCOUNT_BY_ID']),
    getToLocalArray() {
        this.localGoodsArray = this.GET_GOOD_BY_ID(this.$route.params.id);
    },
    inStockOrder() {
      let inStockOrderText;
      if (this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "order0") {
        inStockOrderText = "Под заказ (< 1 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "order12") {
        inStockOrderText = "Под заказ (1-2 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "order34") {
        inStockOrderText = "Под заказ (3-4 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "yes") {
        inStockOrderText = "В наличии";
      } else {
        inStockOrderText = "";
      }
      return inStockOrderText;
    },
    percentDiscount() {
      return this.GET_DISCOUNT_BY_ID(this.localGoodsArray.id);
    },
    SetStockColor: function() {
            return {
                'stockYes'    : this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "yes",
                'stockOrder'      : this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) !== "yes",
            }
    }
  },
  mounted() {
    this.getToLocalArray;
  }
};
</script>

<style lang="scss" scoped>
.card__container {
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 1280px;
  margin: 0 auto;
  gap: 1rem;
  background-color: khaki;
  &_image {
    width: fit-content;
    height: 100%;
    background-color: forestgreen;
    border: 1px solid rgb(1, 1, 1);
  }
  &_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: 100%;
    background-color: rgb(110, 104, 190);
    border: 1px solid rgb(255, 0, 0);
    padding: 1rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    &-title {
        font-size: 1.4rem;
    }
    &-stock {
        margin-top: 1rem;
    }
    &-price {
        font-size: 2rem;
        font-weight: 700;
        flex-grow: 1;
        margin-top: 1rem;
    }
    &-oldprice {
        font-size: 1.4rem;
    }
    &-buttoncart {
        width: 250px;
        height: 50px;
        color: white;
        font-size: 1rem;
        font-weight: 700;
        background-color: #DC2840;
        border: none;
        border-radius: 0.5rem;
    }
  }
}

.colors__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-grow: 1;
    margin-top: 1rem;
    width: 138px;
    gap: 10px;
    &_colors {
        display: block;
        width: 27px;
        height: 27px;
        background-color: rgb(100, 126, 255);
        border: 1px solid #676767;
        border-radius: 4px;
        padding: 5px;
        &-inside {
            display: block;
            width: 15px;
            height: 15px;
            background-color: #DC2840;
            border: none;
            border-radius: 2px;
        }
    }
    &_colors:active {
        border: 2px solid black;
    }
}

.redPrice {
  color: #DC2840;
}
.stockYes {
  background-color: #c2f0e4;
}

.stockOrder {
  background-color: #ffeec2;
}
.color1 {
    background-color: #676767;
}
.color2 {
    background-color: #e07416;
}
.color3 {
    background-color:rgb(0, 110, 255)
}
.color4 {
    background-color:rgb(12, 205, 5)
}

</style>
