<template>
  <div class="cart__container">
    <div class="cart__container_cart">
      <h3>Моя корзина</h3>
      <div class="cart__container_cart-empty" v-if="!cartArray.length">
        Вы еще ничего не выбрали &#9785;
      </div>
      <!-- Отрисовываем элементы корзины -->
      <vCartItem v-for="item in cartArray" :key="item.id" :cartItemArray="item">
      </vCartItem>
    </div>
    <div class="cart__container_order">
      <vCartTotal />
    </div>
  </div>
</template>

<script>
import vCartItem from "../components/Cart-item.vue";
import vCartTotal from "../components/CartTotal.vue"
import { mapState } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState(["cartArray"]),
  },
  components: {
    vCartItem,
    vCartTotal
  },
};
</script>

<style lang="scss" scoped>
.cart__container {
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin: 0 auto;
  &_cart {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 75%;
    &-empty {
      display: flex;
      background-color: aquamarine;
      border: 1px solid fuchsia;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      font-size: 3rem;
    }
  }
  &_order {
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    width: 25%;
  }
}
</style>
