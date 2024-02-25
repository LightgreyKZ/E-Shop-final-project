const BASE_CATALOG_URL = 'https://fakestoreapi.com/products';
const BASE_DISCOUNTS_URL = 'http://localhost:3000/discounts';

export default {
    namespaced: true,
    state: {
        gotGoods: [],   /* Основной массив данных */
        gotDiscounts: [],
        isLoading: false
    },
    getters: {
    },
    mutations: {
        SET_GOODS(state, payload) {
            state.gotGoods = payload;
            //сортировка массива по категориям
            state.gotGoods.sort((a,b) => {
                if (a.category > b.category) {
                    return -1;
                }
                if (a.category < b.category) {
                    return 1;
                }
                return 0;
            })

            state.isLoading = true;
        },
        SET_DISCOUNTS(state, payload) {
            state.gotDiscounts = payload;

        }
    },
    actions: {
        async getGoods({ commit }) {
            try {
                const data = await fetch(BASE_CATALOG_URL);
                const json = await data.json();
                // console.log(json);
                commit('SET_GOODS', json);
              } catch (error) {
                console.error('Ошибка при получении данных каталога:', error);
              }

        },
        async getDiscounts({commit}) {
            try {
                const dataDis = await fetch(BASE_DISCOUNTS_URL);
                const jsonDis = await dataDis.json();
                console.log(jsonDis);
                commit('SET_DISCOUNTS', jsonDis);
            } catch (error) {
                console.error('Ошибка при получении списка скидок:', error);
            }
        }
    }
}