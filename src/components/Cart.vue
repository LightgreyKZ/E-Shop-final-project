<template>
  <h2>Моя корзина</h2>
  <div class="cart__container">
    <div class="cart__container_cart">
      <div class="cart__container_delselected" v-if="cartArray.length">
        <input
          class="cart__container_delselected-checkbox"
          type="checkbox"
          v-model="selectAll"
          @change="toggleSelectAll"
        />
        <span
          ><button class="cart__container_delselected-button" @click="deleteSelectedItems">Удалить выбранные</button></span
        >
      </div>
      <div class="cart__container_cart-empty" v-if="!cartArray.length">
        Вы еще ничего не выбрали &#9785;
      </div>
      <!-- Отрисовываем элементы корзины -->
      <vCartItem
        v-for="item in cartArray"
        :key="item.id"
        :cartItemArray="item"
        :selected="selectAll" 
        @SelectItemInCart="toggleSelect"
      >
      </vCartItem>
    </div>
    <div class="cart__container_order">
      <vCartTotal />
    </div>
  </div>
</template>

<script>
import vCartItem from "../components/Cart-item.vue";
import vCartTotal from "../components/CartTotal.vue";
import { mapState, mapActions } from "vuex";

export default {
  name: "Cart",
  data() {
    return {
      selectAll: false, // Состояние общего чекбокса
    };
  },
  computed: {
    ...mapState(["cartArray", "selectedItems"]),
  },
  methods: {
    ...mapActions(["addToSelect", "delFromSelect", "delAllFromSelect","delSelectedItemsFromCart"]),
    toggleSelectAll() {
      if (this.selectAll) {
        // Выбрать все элементы
        // this.addToSelect(this.cartArray.forEach(item => item.id));
        this.cartArray.forEach((element) => {
          this.addToSelect({ id: element.id, color: element.color });
        });
      } else {
        // Снять выбор со всех элементов
        this.cartArray.forEach((element) => {
          this.delFromSelect({ id: element.id, color: element.color });
        });
      }
    },
    //Метод для выбора элементов корзины из Cart-item
    toggleSelect(idFromCart, isSelFromCart, colorFromCart) {
      if (isSelFromCart) {
        this.addToSelect({ id: idFromCart, color: colorFromCart });
      } else {
        // console.log('1.Перед удалением из выделенного: ' + idFromCart + ' - ' +colorFromCart);
        this.delFromSelect({ id: idFromCart, color: colorFromCart });
      }
    },
    deleteSelectedItems() {
      this.delSelectedItemsFromCart();
      this.selectAll = false;
    },
  },
  components: {
    vCartItem,
    vCartTotal,
  },
  mounted() {
    this.delAllFromSelect();
  }
};
</script>

<style lang="scss" scoped>
.cart__container {
  display: flex;
  flex-direction: row;
  width: 1280px;
  margin: 0 auto;
  gap: 1rem;
  &_cart {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 75%;
    &-empty {
      display: flex;
      // background-color: aquamarine;
      // border: 1px solid fuchsia;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
      font-size: 3rem;
    }
  }
  &_order {
    display: flex;
    flex-direction: column;
    // border: 1px solid blue;
    margin-top: 3rem;
    width: 25%;
  }
  &_delselected {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    // border: 1px solid thistle;
    &-checkbox {
      width: 1.3rem;
      height: 1.3rem;
    }
    &-button {
      background-color: #ECECEC;
      height: 40px;
      width: 150px;
      margin-right: 5px;
      border-radius: 7px;
      font-weight: 500;
    }
  }
}
</style>
