import { createStore } from "vuex";
import goods from "./modules/goods";

export default createStore({
  state: {
    cartArray: [],
  },
  getters: {
    // doubleCounter(state) {
    //   return state.counter * 2
    // },
    // tripleCounter(state) {
    //   return state.counter * 3
    // }
  },
  mutations: {
    // decreaseCounter(state) {
    //   state.counter--
    // },
    // incrementCounter(state, payload) {
    //   state.counter = state.counter + payload.value
    // }
  },
  actions: {
    // incrementCounter(context, payload) {
    //   context.commit('incrementCounter', payload)
    // }
  },
  modules: {
    goods,
  },
});
