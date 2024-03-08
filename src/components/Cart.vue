<template>
  <div class="cart__container">
    <div class="cart__container_cart">
      <h3>Моя корзина</h3>
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
    justify-content: space-between;
    width: 75%;
  }
  &_order {
    display: flex;
    flex-direction: column;
    border: 1px solid blue;
    width: 25%;
  }
}
</style>
