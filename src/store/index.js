import { createStore } from "vuex";
import goods from "./modules/goods";

export default createStore({
  state: {
    cartArray: [],
    favArray: [],
    selectedItems: [], // Массив выбранных элементов (по id)
  },
  getters: {
    cartGetter(state) {
      return state.cartArray;
    },
    //Наличие в корзине
    isItemInCart(state) {
      return function (itemid) {
        const cartItemIndex = state.cartArray.findIndex(
          (item) => item.id === itemid
        );
        if (cartItemIndex !== -1) {
          return true;
        } else {
          return false;
        }
      };
    },
    //Сумма товаров в корзине
    cartTotalSum(state) {
      const totalSum = state.cartArray.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);
      return totalSum;
    },
    cartCounts(state) {
      // Вычисляем общее количество товаров
      return state.cartArray.reduce((total, item) => total + item.quantity, 0);
    },
    cartCountItem(state) {
      return function (itemid) {
        return state.cartArray.reduce((total, item) => {
          if (item.id === itemid) {
            return total + item.quantity;
          }
          return total;
        }, 0);
        // const cartItemIndex = state.cartArray.findIndex(
        //   (item) => item.id === itemid
        // );
        // if (cartItemIndex !== -1) {
        //   return state.cartArray[cartItemIndex].quantity;
        // } else {
        //   return 0;
        // }
      };
    },
  },
  mutations: {
    //ДОБАВЛЕНИЕ В КОРЗИНУ
    ADD_TO_CART(state, payload) {
      //Проверка на наличие уже такого товара в корзине
      if (state.cartArray.length) {
        let isExists = false;
        state.cartArray.map((item) => {
          if (item.id === payload.id && item.color === payload.color) {
            isExists = true;
            item.quantity++;
            item.color = payload.color;
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
    //УДАЛЕНИЕ ИЗ КОРЗИНЫ ( ПО ID)
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
          if (itemfav.id === payload.id && itemfav.color === payload.color) {
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
        state.favArray.findIndex((item) => item.id === payload.id || item.color !== payload.color),
        1
      );
    },
    ADD_TO_SELECTED_ITEMS(state, payload) {
      if (state.selectedItems.length) {
        let isExistsSel = false;
        state.selectedItems.map((itemsel) => {
          if (itemsel.id === payload.id && itemsel.color === payload.color) {
            isExistsSel = true;
            return {};
          }
        });
        if (!isExistsSel) {
          state.selectedItems.push(payload);
        }
      } else {
        state.selectedItems.push(payload);
      }
    },
    DEL_FROM_SELECTED_ITEMS(state, payload) {
      // let index = state.selectedItems.findIndex((item) => {
      //   console.log(item.id + ' - ' + payload.id);
      //   console.log(item.color + ' - ' + payload.color);
      //   (item.id !== payload.id || item.color !== payload.color)
      // });
      // console.log(index);
      // state.selectedItems.splice(index,1);
      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== payload.id || item.color !== payload.color
      );
    },
    DEL_SELECTED_ITEMS_FROM_CART(state) {
      for (let i = 0; i < state.selectedItems.length; i++) {
        // console.log('Я тут, готов удалят выбранные элементы, итерация: ' + i);
        // console.log('Массив выбранных элементов: ' + state.selectedItems[i]);
        state.cartArray = state.cartArray.filter(
          (item) =>
            item.id !== state.selectedItems[i].id ||
            item.color !== state.selectedItems[i].color
        );
      }
      state.selectedItems = [];
    },
    DEL_ALL_FROM_SELECTED(state) {
      state.selectedItems = [];
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
    addToSelect({ commit }, payload) {
      commit("ADD_TO_SELECTED_ITEMS", payload);
    },
    delFromSelect({ commit }, payload) {
      commit("DEL_FROM_SELECTED_ITEMS", payload);
    },
    delAllFromSelect({ commit }) {
      commit("DEL_ALL_FROM_SELECTED");
    },
    delSelectedItemsFromCart({ commit }) {
      commit("DEL_SELECTED_ITEMS_FROM_CART");
    },
  },
  modules: {
    goods,
  },
});
