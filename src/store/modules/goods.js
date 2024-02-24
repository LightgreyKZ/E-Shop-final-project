export default {
    namespaced: true,
    state: {
        gotGoods: [],   /* Основной массив данных */
        isLoading: false
    },
    getters: {
    },
    mutations: {
        SET_GOODS(state, payload) {
            state.gotGoods = payload;
            state.isLoading = true;
        }
    },
    actions: {
        async getGoods({ commit }) {
            try {
                // const data = await fetch('https://randomuser.me/api/?results=100');
                const data = await fetch('https://fakestoreapi.com/products');
                const json = await data.json();
                // console.log(json);
                commit('SET_GOODS', json);
              } catch (error) {
                console.error('Ошибка при получении данных:', error);
              }

        }
    }
}