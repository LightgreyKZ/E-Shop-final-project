import { createStore } from 'vuex'
// import users from './modules/users'

export default createStore({
  state: {
    counter: 20
  },
  getters: {
    doubleCounter(state) {
      return state.counter * 2
    },
    tripleCounter(state) {
      return state.counter * 3
    }
  },
  mutations: {
    decreaseCounter(state) {
      state.counter--
    },
    incrementCounter(state, payload) {
      state.counter = state.counter + payload.value
    }
  },
  actions: {
    incrementCounter(context, payload) {
      context.commit('incrementCounter', payload)
    }
  },
  modules: {
  }
})