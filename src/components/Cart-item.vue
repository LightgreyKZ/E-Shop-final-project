<template>
  <div class="cart_item">
    <div class="cart_item__img" :style="backgroundImage"></div>
    <div class="cart_item__description">{{ cartItemArray.description }}</div>
    <div class="cart_item__actions">
      <div class="cart_item__actions_price">
        {{
          ((cartItemArray.price -
            ((cartItemArray.price * percentDiscount) / 100).toFixed(2)) *
          cartItemArray.quantity).toFixed(2)
        }}&#36;
      </div>
      <div class="cart_item__actions_discount" v-if="percentDiscount">
        <s>{{ cartItemArray.price }}&#36;</s>
      </div>
      <div class="cart_item__actions_bottom">
        <div
          class="cart_item__actions-like"
          :class="GetFavStatus"
          @click="addFavorite()"
        >
          &#10084;
        </div>
        <div class="cart_item__actions-delete" @click="delItemFromCart()">
          &#128465;
        </div>
        <div class="cart_item__actions-buttons">
          <button class="plus-minus-buttons" @click="decItemCart()">
            &#8722;
          </button>
          <span class="showed-quantity">{{ cartItemArray.quantity }}</span>
          <button class="plus-minus-buttons" @click="add_To_Cart()">
            &#43;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Cart-item",
  data() {
    return {
      backgroundImage: `background-image: url('${this.cartItemArray.image}')`,
      isFavorite: false,
    };
  },
  props: ["cartItemArray"],
  computed: {
    //импортируем массив из стора, чтобы работало добавление в избранное
    ...mapState(["favArray"]),
    ...mapGetters("goods", ["GET_DISCOUNT_BY_ID", "GET_INSTOCK_BY_ID"]),
    GetFavStatus() {
      return {
        liked: this.isFavorite == true,
      };
    },
    percentDiscount() {
      return this.GET_DISCOUNT_BY_ID(this.cartItemArray.id);
    },
  },
  mounted() {
    //  this.cartItemArray.quantity = 1;
    // console.log('Before: ' + this.isFavorite);
    //ищем был ли добавлен элемент в избранное ранее
    const isFoundFav = this.favArray.find(
      (item) => item.id === this.cartItemArray.id
    );
    if (isFoundFav) {
      this.isFavorite = true;
    }
    // console.log('After: ' + this.isFavorite);
    // console.log(this.favArray);
    // console.log(this.favArray.includes('id: 18'));
  },
  methods: {
    //импортируем методы из стора, чтобы работало добавление в избранное
    ...mapActions([
      "addToCart",
      "addToFav",
      "delFav",
      "delFromCart",
      "decQuantityInCart",
    ]),
    delItemFromCart() {
      //наверное проще уже индекс передать из Cart.vue, пока так оставлю
      this.delFromCart({ id: this.cartItemArray.id });
    },
    addFavorite() {
      //реализовал переключение между статусами в избранном/удаление из избранного
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        //добавляем в стор инфу об id сразу со структурой в виде объекта
        this.addToFav({ id: this.cartItemArray.id });
      } else {
        this.delFav(this.cartItemArray);
      }
    },
    add_To_Cart() {
      //над этим просидел часов 5: (чтобы добавить кол-во в корзину)
      this.addToCart(this.cartItemArray);
    },
    decItemCart() {
      this.decQuantityInCart(this.cartItemArray);
    },
  },
};
</script>

<style lang="scss">
.cart_item {
  display: flex;
  width: 100%;
  height: 10rem;
  align-items: center;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
  &__img {
    display: block;
    // background-color: aquamarine;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
    width: 9rem;
    height: 9rem;
  }
  &__description {
    display: block;
    // background-color: bisque;
    padding: 0 10px;
    width: 36rem;
    height: 9rem;
  }
  &__actions {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    font-family: "Ubuntu", sans-serif;
    // background-color: rgb(255, 191, 127);
    width: 15rem;
    height: 9rem;
    &_price {
      font-weight: bold;
      font-size: 1.4rem;
    }
    &_discount {
      font-size: 1.2rem;
    }
    &_bottom {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100%;
      // background-color: brown;
    }
    &-like {
      font-size: 2rem;
      color: grey;
      transition: 0.5s ease-out;
    }
    &-delete {
      display: flex;
      justify-content: center; /* Центрирование по горизонтали */
      align-items: center; /* Центрирование по вертикали */
      width: 40px;
      height: 40px;
      border-radius: 50%;
      // border: 1px solid grey;
      font-size: 2rem;
      color: grey;
      transition: 0.2s;
    }
    &-buttons {
      display: flex;
      flex-direction: row;
      align-items: baseline;
      height: 100%;
    }
    &-like:hover {
      color: red;
      cursor: pointer;
    }
    &-delete:hover {
      color: red;
      background-color: rgba(211, 211, 211, 0.642);
      cursor: pointer;
    }
  }
}

.plus-minus-buttons,
.showed-quantity {
  width: 50px;
  height: 40px;
  padding: 3px 15px 7px 15px;
  font-size: 1.3rem;
  font-weight: bold;
}

.liked {
  color: red;
  // transform: scale(1.05);
  animation: heartbeat 1.2s ease-in-out infinite alternate both;
}

@keyframes heartbeat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.03);
  }
  50% {
    transform: scale(1.07);
  }
  75% {
    transform: scale(1.03);
  }
  100% {
    transform: scale(1);
  }
}
</style>
