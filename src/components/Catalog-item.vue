<template>
  <div class="goodsCard">
    <div class="cardImage" :style="backgroundImage"></div>
    <div class="cardInfo">
      <h4 class="cardTitle">{{ products.title }}</h4>
      <p class="instock">{{ inStockOrder }}</p>
      <p class="oldPrice" v-if="percentDiscount">
          <s>{{ products.price }}</s>
        </p>
      <div class="addinfo">
        
        <p class="cardPrice" :class="{ redPrice: percentDiscount }">
          {{ products.price }}
        </p>
        <button class="addToCart" @click="add_To_Cart()">+</button>
        <!-- <p v-if="percentDiscount">Процент скидки: {{ percentDiscount }} %</p> -->
      </div>
    </div>
    
    <span v-if="isInCart"> Товар в корзине </span>
  </div>

  <!-- <div :class="SetClass" class = 'goodsCard' >
        <span class="cross" @click="delTask">✖</span>
        <h4>{{ title }}</h4>
        <p>{{ desc }}</p>
        <button @click="showDetails">Details</button><br>
        <input type="checkbox" class="checkbox" v-model="ischeck" @change="SetStatus">Done!
    </div>
    <Transition>
          <div class="details" v-if="isDetails" @click="showDetails">
            <slot></slot>
          </div>
    </Transition> -->
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Catalog-item",
  data() {
    return {
      backgroundImage: `background-image: url('${this.products.image}')`,
    };
  },
  props: ["addinfo", "products"],
  methods: {
    ...mapActions(["addToCart"]),
    add_To_Cart() {
      //над этим просидел часов 5: (чтобы добавить кол-во в корзину)
      this.addToCart({ ...this.products, quantity: 1 });
    },
  },
  computed: {
    ...mapState(["cartArray"]),
    ...mapGetters(["isItemInCart"]),
    ...mapGetters("goods", ["GET_DISCOUNT_BY_ID", "GET_INSTOCK_BY_ID"]),
    isInCart() {
      return this.isItemInCart(this.products.id);
    },
    percentDiscount() {
      return this.GET_DISCOUNT_BY_ID(this.products.id);
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

.cardImage {
  display: block;
  width: 100%;
  height: 60%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 1rem;
  border: 1px solid red;
  transition: 0.4s;
}

.cardInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 40%;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  /* border: 1px solid salmon; */
}

.addinfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.instock {
    flex-grow: 1;
}

.cardPrice {
  font-size: 2rem;
  font-weight: 700;
}

.redPrice {
  color: red;
}

.cardImage:hover {
  transform: scale(1.03);
  cursor: grabbing;
}

.addToCart {
  width: 3rem;
  height: 2rem;
  background-color: rgb(165, 165, 165);
  color: black;
  font-weight: bold;
  border-radius: 8px;
  transition: 0.3s;
  border: none;
  display: inline;
  /* cursor: url("../components/icons/hand-pointer-svgrepo-com.svg"), auto; */
  cursor: url("../components/icons/free-icon-hand-cursor-5781771.png"), auto;
}

.addToCart:hover {
  transform: scale(1.05);
  background-color: red;
  color: white;
}
</style>
