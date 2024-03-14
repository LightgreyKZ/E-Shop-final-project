<template>
  <h2>Детальное описание товара</h2>
  <!-- <span>{{ this.$route.params.id }}</span> -->
  <div class="card__container">
    <!-- Основное изображение. Меняется рамка в зависимости от выбранного цвета -->
    <div class="card__container_image" :class="SetImageBorder">
        <img :src=localGoodsArray.image alt="image" height="100%">
    </div>
    <div class="card__container_info">
        <div class="card__container_info-title">{{ localGoodsArray.description }}</div>
        <div class="card__container_info-stock" :class="SetStockColor">{{ inStockOrder }}</div>
        <div class="colors__container">
                <!-- Иконки выбора цвета. Меняют границу у изображения товара. Определяется какой цвет выбран  -->
                <button class="colors__container_colors" :class="{blackborder: SelectedColor == 'beige'}" @click="SetItemColor('beige')">
                    <div class="colors__container_colors-inside color1"></div>
                </button>
                <button class="colors__container_colors" :class="{blackborder: SelectedColor == 'blue'}" @click="SetItemColor('blue')">
                    <div class="colors__container_colors-inside color2"></div>
                </button>
                <button class="colors__container_colors" :class="{blackborder: SelectedColor == 'purple'}" @click="SetItemColor('purple')">
                    <div class="colors__container_colors-inside color3"></div>
                </button>
                <button class="colors__container_colors" :class="{blackborder: SelectedColor == 'grey'}" @click="SetItemColor('grey')">
                    <div class="colors__container_colors-inside color4"></div>
                </button>
                <span>Выбран: {{ SelectedColor }}</span>
        </div>
        <div class="card__container_info-oldprice" v-if="percentDiscount"><s>{{ localGoodsArray.price }}&#36;</s></div>
        <div class="card__container_info-price" :class="{ redPrice: percentDiscount }">
            {{ localGoodsArray.price - (localGoodsArray.price * percentDiscount/100).toFixed(2) }}&#36;
        </div>
        <button class="card__container_info-buttoncart" @click="add_To_Cart()">Добавить в корзину</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: "bigCard",
  data() {
    return {
        //localGoodsArrayIn: [],
        SelectedColor: ''
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    ...mapActions('goods',['getGoods','getDiscounts','getGoodById']),
    add_To_Cart() {
      this.addToCart({ ...this.localGoodsArray, quantity: 1, color: this.SelectedColor });
    },
    SetItemColor(sColor) {
        this.SelectedColor = sColor;
    }
  },
  computed: {
    ...mapState('goods', ['localGoodsArray']),
    ...mapGetters('goods',['GET_INSTOCK_BY_ID','GET_DISCOUNT_BY_ID']),
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
    SetStockColor() {
            return {
                'stockYes'    : this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) == "yes",
                'stockOrder'      : this.GET_INSTOCK_BY_ID(this.localGoodsArray.id) !== "yes",
            }
    },
    SetImageBorder() {
        return {
            'color1'    : this.SelectedColor == 'beige',
            'color2'    : this.SelectedColor == 'blue',
            'color3'    : this.SelectedColor == 'purple',
            'color4'    : this.SelectedColor == 'grey'
        }
    },
    selectedGood() {
    return this.localGoodsArray;
  },
  },
  //Получилось сделать чтобы карточка открывалась в новом окне с данными. Дело было в асинхронности. То есть 
  //мутация, которая получала карточку срабатывала раньше чем успевал заполнится основной массив по товарам.
async mounted() {
  try {
    await this.getGoods();
    await this.getDiscounts();
    await this.getGoodById(this.$route.params.id);
  } catch (error) {
    console.error('Ошибка при загрузке данных:', error);
  }
}
  // async mounted() {
  //   this.getGoods();
  //   this.getDiscounts();
  //   console.log('Я смонтирован: ' + this.$route.params.id);
  //   this.getGoodById(this.$route.params.id);
  //   // this.localGoodsArrayIn = this.selectedGood;
  //   // console.log(this.localGoodsArrayIn + 'Desc: ' + this.localGoodsArrayIn.description);
  // }
};
</script>

<style lang="scss" scoped>
.card__container {
  display: flex;
  flex-direction: row;
  height: 500px;
  width: 1280px;
  margin: 0 auto;
  padding: 5px;
  gap: 1rem;
  background-color: rgb(255, 255, 255);
  // border: 1px solid black;
  border-radius: 1rem;
  &_image {
    width: fit-content;
    height: 100%;
    // background-color: forestgreen;
    border-radius: 1rem;
    // border: 3px solid rgb(1, 1, 1);
  }
  &_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    height: 100%;
    // background-color: rgb(110, 104, 190);
    // border: 1px solid rgb(255, 0, 0);
    padding: 0.5rem;
    font-family: "Ubuntu", sans-serif;
    font-weight: 400;
    &-title {
        font-size: 1.4rem;
    }
    &-stock {
        display: block;
        height: 2rem;
        width: fit-content;
        margin-top: 1rem;
        padding: 0.5rem;
        // border: 1px solid black;
        border-radius: 1rem;
        font-size: 0.8rem;
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
        font-family: 'Montserrat', sans-serif;
        background-color: #DC2840;
        border: none;
        border-radius: 0.5rem;
    }
    &-buttoncart:active {
        transform: scale(1.04);
        background-color: white;
        color: #DC2840;
        border: 1px solid #DC2840;
    }
  }
}

.colors__container {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    align-items: baseline;
    flex-grow: 1;
    margin-top: 1rem;
    width: 270px;
    gap: 10px;
    &_colors {
        display: block;
        width: 27px;
        height: 27px;
        // background-color: rgb(100, 126, 255);
        border: 1px solid #b4b4b4;
        border-radius: 4px;
        padding: 5px;
        &-inside {
            display: block;
            width: 15px;
            height: 15px;
            // background-color: #DC2840;
            border: none;
            border-radius: 2px;
        }
    }
    &_colors:active {
        border: 2px solid black;
    }
}

img {
    border-radius: 1rem;
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
    background-color: #fec406;
    border: 4px solid #fec406;
}
.color2 {
    background-color: #389bd8;
    border: 4px solid #389bd8;;
}
.color3 {
    background-color:purple;
    border: 4px solid purple;
}
.color4 {
    background-color:grey;
    border: 4px solid grey;
}

.blackborder {
    border: 2px solid black;
}

</style>
