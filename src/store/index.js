import { createStore } from "vuex";
import goods from "./modules/goods";

export default createStore({
  state: {
    cartArray: [],
    favArray: [],
  },
  getters: {
    cartGetter(state) {
      return state.cartArray;
    },
    //Наличие в корзине
    isItemInCart(state) {
      return function(itemid) {
        const cartItemIndex = state.cartArray.findIndex((item) => item.id === itemid);
        if (cartItemIndex !== -1) {
          return true
        }
        else {
          return false
        }
      }
    },
    //Сумма товаров в корзине
    cartTotalSum(state) {
      const totalSum = state.cartArray.reduce((sum,item) => {
        return (sum + item.price * item.quantity);
      },0);
      return totalSum.toFixed(2);
    }
    // doubleCounter(state) {
    //   return state.counter * 2
    // },
    // tripleCounter(state) {
    //   return state.counter * 3
    // }
  },
  mutations: {
    //ДОБАВЛЕНИЕ В КОРЗИНУ
    ADD_TO_CART(state, payload) {
      //Проверка на наличие уже такого товара в корзине
      if (state.cartArray.length) {
        let isExists = false;
        state.cartArray.map((item) => {
          if (item.id === payload.id) {
            isExists = true;
            item.quantity++;
          }
        });
        //если такого товара ранее не было, то пушим
        if (!isExists) {
          state.cartArray.push(payload);
        }
      }
      //если корзина совсем пустая то пушим
      else {
        state.cartArray.push(payload);
      }
    },
    //УДАЛЕНИЕ ИЗ КОРЗИНЫ
    DEL_FROM_CART(state, payload) {
      state.cartArray.splice(
        state.cartArray.findIndex((item) => item.id === payload.id),
        1
      );
    },
    //УМЕНЬШЕНИЕ СЧЕТЧИКА ТОВАРОВ В КОРЗИНЕ
    DEC_QUANTITY_IN_CART(state, payload) {
      const cartItemIndex = state.cartArray.findIndex(
        (item) => item.id === payload.id
      );

      if (cartItemIndex !== -1) {
        // Уменьшаем количество товара на 1
        if (state.cartArray[cartItemIndex].quantity > 1) {
          state.cartArray[cartItemIndex].quantity--;
        } else {
          // Если количество уже 1, удаляем товар из корзины
          state.cartArray.splice(cartItemIndex, 1);
        }
      }
    },
    //ДОБАВЛЕНИЕ ТОВАРА В ИЗБРАННОЕ
    ADD_TO_FAV(state, payload) {
      if (state.favArray.length) {
        let isExistsFav = false;
        state.favArray.map((itemfav) => {
          if (itemfav.id === payload.id) {
            isExistsFav = true;
            return {};
          }
        });
        if (!isExistsFav) {
          state.favArray.push(payload);
        }
      } else {
        state.favArray.push(payload);
      }
    },
    //УДАЛЕНИЕ ИЗ ИЗБРАННОГО
    DEL_FROM_FAV(state, payload) {
      //Удаляем элемент из избранного. Ищем индекс переданного в payload id и удаляем 1 элемент.
      state.favArray.splice(
        state.favArray.findIndex((item) => item.id === payload.id),1
        );
    },
  },
  actions: {
    //ДОБАВЛЕНИЕ В КОРЗИНУ
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },
    //УДАЛЕНИЕ ИЗ КОРЗИНЫ
    delFromCart({ commit }, payload) {
      commit("DEL_FROM_CART", payload);
    },
    //ДОБАВЛЕНИЕ ТОВАРА В ИЗБРАННОЕ
    addToFav({ commit }, payload) {
      commit("ADD_TO_FAV", payload);
    },
    //УДАЛЕНИЕ ИЗ ИЗБРАННОГО
    delFav({ commit }, payload) {
      commit("DEL_FROM_FAV", payload);
    },
    //УМЕНЬШЕНИЕ СЧЕТЧИКА ТОВАРОВ В КОРЗИНЕ
    //да, тут я уже понял, что лучше бы actions объявлял капсом, чтобы они заметнее были в компонентах..
    decQuantityInCart({ commit }, payload) {
      commit("DEC_QUANTITY_IN_CART", payload);
    },
  },
  modules: {
    goods,
  },
});
