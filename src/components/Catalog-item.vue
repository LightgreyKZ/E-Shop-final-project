<template>
  <div class="goodsCard">
    
      <router-link :to="{ name: 'card', params: { id: products.id } }" class="routeImage">
        <!-- <div class="cardImage" :style="backgroundImage"></div> -->
        <div class="cardImage">
          <img :src=products.image alt="image" height="100%" width="100%">
        </div>
      </router-link>
    
    <div class="cardInfo">
      <h4 class="cardTitle">{{ products.title }}</h4>
      <p class="instock">{{ inStockOrder }}</p>
      <p class="oldPrice" v-if="percentDiscount">
          <s>{{ products.price }}&#36;</s>
        </p>
      <div class="addinfo">
        
        <p class="cardPrice" :class="{ redPrice: percentDiscount }">
            {{ products.price - (products.price * percentDiscount/100).toFixed(2) }}&#36;
        </p>
        <span class="inCart" v-if="isInCart">В корзине: {{ cartCountItemLocal }}</span>
        <button class="addToCart" @click="add_To_Cart()">+</button>
        <!-- <p v-if="percentDiscount">Процент скидки: {{ percentDiscount }} %</p> -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Catalog-item",
  data() {
    return {
      // backgroundImage: `background-image: url('${this.products.image}')`,
    };
  },
  props: ["addinfo", "products"],
  methods: {
    ...mapActions(["addToCart"]),
    add_To_Cart() {
      //над этим просидел часов 5: (чтобы добавить кол-во в корзину)
      this.addToCart({ ...this.products, quantity: 1, color: '' });
    },
  },
  computed: {
    ...mapState(["cartArray"]),
    ...mapGetters(["isItemInCart","cartCountItem"]),
    ...mapGetters("goods", ["GET_DISCOUNT_BY_ID", "GET_INSTOCK_BY_ID"]),
    isInCart() {
      return this.isItemInCart(this.products.id);
    },
    percentDiscount() {
      return this.GET_DISCOUNT_BY_ID(this.products.id);
    },
    cartCountItemLocal() {
      return this.cartCountItem(this.products.id);
    },
    inStockOrder() {
      let inStockOrderText;
      if (this.GET_INSTOCK_BY_ID(this.products.id) == "order0") {
        inStockOrderText = "Под заказ (< 1 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.products.id) == "order12") {
        inStockOrderText = "Под заказ (1-2 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.products.id) == "order34") {
        inStockOrderText = "Под заказ (3-4 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.products.id) == "yes") {
        inStockOrderText = "В наличии";
      } else {
        inStockOrderText = "";
      }
      return inStockOrderText;
    },
  },
};
</script>

<style scoped>
.goodsCard {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 100%;
  /* border: 1px solid rgb(255, 53, 30); */
  /* background-color: coral; */
}

.routeImage {
  display: flex;
  width: 100%;
  height: 60%;
  border-radius: 1rem;
  /* border: 1px solid red; */
}

.cardImage {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* flex-grow: 1; */
  /* background-position: top;
  background-size: cover;
  background-repeat: no-repeat; */
  /* border-radius: 1rem; */
  /* border: 1px solid red; */
  transition: 0.5s;
}

img {
    border-radius: 1rem;
}

.cardInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 40%;
  min-width: 100%;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  line-height: 19.5px;
  /* border: 1px solid salmon; */
}

.addinfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}

.instock {
    flex-grow: 1;
    font-weight: 400;
}

.inCart {
    padding: 0 5px;
    font-size: 0.8rem;
}

.cardPrice {
  /* font-size: 1.6rem;
  font-weight: 700; */
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: left;

}

.redPrice {
  color: #DC2840;
}

.cardImage:hover {
  transform: scale(1.05);
  cursor: grabbing;
}

.addToCart {
  width: 42px;
  height: 32px;
  background-color: #ECECEC;
  color: black;
  font-weight: 700;
  border-radius: 8px;
  transition: 0.4s;
  border: none;
  display: inline;
  min-height: 100%;
  /* cursor: url("../components/icons/hand-pointer-svgrepo-com.svg"), auto; */
  cursor: url("../components/icons/Hand-icon.png"), auto;
}

.addToCart:hover {
  transform: scale(1.05);
  background-color: #DC2840;
  color: white;
}

.addToCart:active {
  background-color: rgb(2, 199, 2);
}

</style>
