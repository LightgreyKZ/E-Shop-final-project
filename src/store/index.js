import { createStore } from "vuex";
import goods from "./modules/goods";

export default createStore({
  state: {
    cartArray: [
    //   {
    //     id: 1,
    //     title: 'Meet Jane',
    //     description: 'Train will arrive at 8 a.m.',
    //     completed: false
    // },
    ],
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
      if (state.cartArray.length) {
        let isExists = false;
        state.cartArray.map((item) => {
          if (item.id === payload.id) {
            isExists = true;
            item.quantity++
          }
        })
        if (!isExists) {
          state.cartArray.push(payload);
        }
      }
      else {
        state.cartArray.push(payload);
      }

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
    }
    // incrementCounter(context, payload) {
    //   context.commit('incrementCounter', payload)
    // }
  },
  modules: {
    goods,
  },
});
