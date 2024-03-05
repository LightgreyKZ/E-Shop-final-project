import { createStore } from "vuex";
import goods from "./modules/goods";

export default createStore({
  state: {
    cartArray: [],
    favArray: []
  },
  getters: {
    cartGetter(state) {
      return state.cartArray;
    }
    // doubleCounter(state) {
    //   return state.counter * 2
    // },
    // tripleCounter(state) {
    //   return state.counter * 3
    // }
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      //Проверка на наличие уже такого товара в корзине
      if (state.cartArray.length) {
        let isExists = false;
        state.cartArray.map((item) => {
          if (item.id === payload.id) {
            isExists = true;
            item.quantity++
          }
        })
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
    ADD_TO_FAV(state, payload) {
      if (state.favArray.length) {
        let isExistsFav = false;
        state.favArray.map((itemfav) => {
          if (itemfav.id === payload.id) {
            isExistsFav = true;
            return {};
          }
        })
        if (!isExistsFav) {
          state.favArray.push(payload);
        }
      }
      else {
        state.favArray.push(payload);
      }
    },
    DEL_FROM_FAV(state, payload) {
      //Удаляем элемент из избранного. Ищем индекс переданного в payload id и удаляем 1 элемент.
      console.log(payload);
      // console.log('Удаляем элемент с INDEX: '+ state.favArray.indexOf(payload.id));
      state.favArray.splice(state.favArray.findIndex((item) => item.id === payload.id),1);
    }
    // decreaseCounter(state) {
    //   state.counter--
    // },
    // incrementCounter(state, payload) {
    //   state.counter = state.counter + payload.value
    // }
  },
  actions: {
    addToCart({commit}, payload) {
      commit('ADD_TO_CART', payload)
    },
    addToFav({commit}, payload) {
      commit('ADD_TO_FAV', payload)
    },
    delFav({commit}, payload) {
      commit('DEL_FROM_FAV', payload)
    }
    // incrementCounter(context, payload) {
    //   context.commit('incrementCounter', payload)
    // }
  },
  modules: {
    goods,
  },
});
