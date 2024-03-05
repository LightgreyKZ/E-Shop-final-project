<template>
  <div class="cart_item">
    <div class="cart_item__img" :style="backgroundImage"></div>
    <div class="cart_item__description">{{ cartItemArray.description }}</div>
    <div class="cart_item__actions">
      <div class="cart_item__actions_price">{{ cartItemArray.price }}</div>
      <div class="cart_item__actions_discount">11000</div>
      <div class="cart_item__actions_bottom">
        <div class="cart_item__actions-like" :class="GetFav" @click="addFavorite()">&#10084;</div>
        <div class="cart_item__actions-delete">&#128465;</div>
        <div class="cart_item__actions-buttons"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: "Cart-item",
  data() {
    return {
      backgroundImage: `background-image: url('${this.cartItemArray.image}')`,
      isFavorite: false
    };
  },
  props: ["cartItemArray"],
  computed: {
    //импортируем массив из стора, чтобы работало добавление в избранное
    ...mapState(['favArray']),
    GetFav() {
            return {
                'liked'             : this.isFavorite == true
            }
        }
  },
  mounted() {
    //  this.cartItemArray.quantity = 1;
    // console.log('Before: ' + this.isFavorite);
    //ищем был ли добавлен элемент в избранное ранее
    const isFoundFav = this.favArray.find((item) => item.id === this.cartItemArray.id);
    if (isFoundFav) {
        this.isFavorite = true;
    }
    // console.log('After: ' + this.isFavorite);
    // console.log(this.favArray);
    // console.log(this.favArray.includes('id: 18'));
  },
  methods: {
    //импортируем методы из стора, чтобы работало добавление в избранное
    ...mapActions(['addToFav','delFav']),
    addFavorite() {
      //реализовал переключение между статусами в избранном/удаление из избранного
      this.isFavorite = !this.isFavorite;
      if (this.isFavorite) {
        //добавляем в стор инфу об id сразу со структурой в виде объекта 
        this.addToFav({id: this.cartItemArray.id});
      }
      else {
        this.delFav({id: this.cartItemArray.id});
      }
       
      
      
    }
  }
};
</script>

<style lang="scss">
.cart_item {
  display: flex;
  width: 65rem;
  height: 10rem;
  align-items: center;
  justify-content: space-around;
  background-color: antiquewhite;
  &__img {
    display: block;
    background-color: aquamarine;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    width: 10rem;
    height: 9rem;
  }
  &__description {
    display: block;
    background-color: bisque;
    width: 35rem;
    height: 9rem;
  }
  &__actions {
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 191, 127);
    width: 15rem;
    height: 9rem;
    &_price {
      font-weight: bold;
      font-size: 1.5rem;
    }
    &_discount {
      font-size: 1.3rem;
    }
    &_bottom {
      display: flex;
      flex-direction: row;
      width: 100%;
      background-color: brown;
    }
    &-like {
      font-size: 2rem;
      color: rgb(255, 255, 255);
      transition:0.5s ease-out;
    }
    &-delete {
      font-size: 2rem;
      color: rgb(255, 255, 255);
      transition: 0.2s;
    }
    &-like:hover {
      color: red;
      cursor: pointer;
    }
    &-delete:hover {
      color: red;
      cursor: pointer;
    }
  }
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
        transform: scale(1.03)
    }
    100% {
        transform: scale(1);
    } 
}

</style>
