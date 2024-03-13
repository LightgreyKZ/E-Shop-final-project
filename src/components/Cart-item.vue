<template>
  <div class="cart_item">
    <input
      type="checkbox"
      v-model="isSelect"
      :checked="selected"
      @change="selectItem"
    />
    <div class="cart_item__img" :style="backgroundImage"></div>
    <div class="cart_item__description">
      {{ cartItemArray.title }}
      <div class="cart_item__description-instock" :class="SetStockColor">
        {{ inStockOrder }}
      </div>
      <div class="cart_item__description-colors">
        <div class="cart_item__description-colorbar" :class="SetColorColor"></div>
        <div class="cart_item__description-colortext">
          {{ SetTextForColor }}
        </div>
        
      </div>
      
    </div>
    <div class="cart_item__actions">
      <div class="cart_item__actions_price">
        {{
          (
            (cartItemArray.price -
              ((cartItemArray.price * percentDiscount) / 100).toFixed(2)) *
            cartItemArray.quantity
          ).toFixed(2)
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
      isSelect: false,
    };
  },
  props: ["cartItemArray", "selected"],
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
    inStockOrder() {
      let inStockOrderText;
      if (this.GET_INSTOCK_BY_ID(this.cartItemArray.id) == "order0") {
        inStockOrderText = "Под заказ (< 1 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.cartItemArray.id) == "order12") {
        inStockOrderText = "Под заказ (1-2 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.cartItemArray.id) == "order34") {
        inStockOrderText = "Под заказ (3-4 недели)";
      } else if (this.GET_INSTOCK_BY_ID(this.cartItemArray.id) == "yes") {
        inStockOrderText = "В наличии";
      } else {
        inStockOrderText = "";
      }
      return inStockOrderText;
    },
    SetStockColor: function() {
            return {
                'stockYes'    : this.GET_INSTOCK_BY_ID(this.cartItemArray.id) == "yes",
                'stockOrder'      : this.GET_INSTOCK_BY_ID(this.cartItemArray.id) !== "yes",
            }
    },
    SetColorColor() {
        return {
            'beige'    : this.cartItemArray.color == 'beige',
            'blue'     : this.cartItemArray.color == 'blue',
            'purple'   : this.cartItemArray.color == 'purple',
            'grey'     : this.cartItemArray.color == 'grey',
            'default'  : this.cartItemArray.color == ''
        }
    },
    SetTextForColor() {
      let colorText;
      if (this.cartItemArray.color == 'beige') 
        {colorText = 'Бежевый'}
      else if (this.cartItemArray.color == 'blue') 
        {colorText = 'Голубой'}
      else if (this.cartItemArray.color == 'purple') 
        {colorText = 'Фиолетовый'}
      else if (this.cartItemArray.color == 'grey') 
        {colorText = 'Серый'}
      else 
        {colorText = 'По умолчанию'};
      return colorText
    }
  },
  mounted() {
    //ищем был ли добавлен элемент в избранное ранее
    const isFoundFav = this.favArray.find(
      (item) => item.id === this.cartItemArray.id
    );
    if (isFoundFav) {
      this.isFavorite = true;
    }
    // this.isSelect = this.selected;
  },
  methods: {
    //импортируем методы из стора, чтобы работало добавление в избранное
    ...mapActions([
      "addToCart",
      "addToFav",
      "delFav",
      "delFromCart",
      "decQuantityInCart",
      "addToSelect",
      "delFromSelect",
    ]),
    delItemFromCart() {
      //наверное проще уже индекс передать из Cart.vue, пока так оставлю
      // this.delFromCart({ id: this.cartItemArray.id });
      //upd. Переделал вот так, потому что в сторе все равно смотрю на payload.id, а тут неважно, что передаю 1 элемент целиком:
      this.delFromCart(this.cartItemArray);
    },
    addFavorite() {
      //реализовал переключение между статусами в избранном/удаление из избранного
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        //добавляем в стор инфу об id сразу со структурой в виде объекта.
        //Upd. Тут надо именно так, потому что массив fav только 1 поле id и содержит
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
    selectItem() {
      this.$emit("SelectItemInCart", this.cartItemArray.id, this.isSelect);
      // if (this.isSelect) {
      //   this.addToSelect({ id: this.cartItemArray.id });
      // }
      // else {
      //   this.delFromSelect({ id: this.cartItemArray.id })
      // }
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
  // border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
  margin-bottom: 1rem;
  &__img {
    display: block;
    // background-color: aquamarine;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 1rem;
    width: 8rem;
    height: 9rem;
  }
  &__description {
    display: block;
    // background-color: bisque;
    padding: 0 10px;
    width: 36rem;
    height: 9rem;
    &-instock {
      display: block;
      height: 2rem;
      width: fit-content;
      margin-top: 1rem;
      padding: 0.5rem;
      // border: 1px solid black;
      border-radius: 1rem;
      font-size: 0.8rem;
    }
    &-colors {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 0.5rem;
      margin-top: 10px;
    }
    &-colorbar {
        display: block;
        height: 24px;
        width: 24px;
        // margin-top: 1rem;
        // align-items: center;
        padding: 5px;
        // color: black;
        // border: 1px solid black;
        border-radius: 5px;
        // font-size: 0.8rem;
    }
    &-colortext {
      font-size: 12px;
    }
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
    margin-right: 5px;
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
      height: 100%;
      border-radius: 50%;
      // border: 1px solid grey;
      font-size: 2rem;
      color: grey;
      transition: 0.2s;
    }
    &-buttons {
      display: flex;
      flex-direction: row;
      // align-items: baseline;
      height: 100%;
      background-color: #ECECEC;
      border-radius: 7px;
      // border: 1px solid black;
    }
    &-like:hover {
      color: red;
      cursor: pointer;
    }
    &-delete:hover {
      color: red;
      background-color: #ECECEC;
      cursor: pointer;
    }
  }
}

input[type="checkbox"]  {
      width: 1.2rem;
      height: 1.2rem;
    }

.plus-minus-buttons,
.showed-quantity {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 100%;
  // padding: 3px 15px 7px 15px;
  font-size: 1.1rem;
  font-weight: bold;
  border: 1px solid #ECECEC;
  background-color: #ECECEC;
  border-radius: 7px;
}

.stockYes {
  background-color: #c2f0e4;
}

.stockOrder {
  background-color: #ffeec2;
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

.beige {
    background-color: #fec406;
    border: 2px solid #fec406;
}
.blue {
    background-color: #389bd8;
    border: 2px solid #389bd8;;
}
.purple {
    background-color:purple;
    border: 2px solid purple;
}
.grey {
    background-color:grey;
    border: 2px solid grey;
}

.default {
    // background-color:grey;
    border: 2px solid grey;
}

</style>
