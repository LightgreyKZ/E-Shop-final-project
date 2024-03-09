const BASE_CATALOG_URL = 'https://fakestoreapi.com/products';
const BASE_DISCOUNTS_URL = 'http://localhost:3000/discounts';

export default {
    namespaced: true,
    state: {
        gotGoods: [],   /* Основной массив данных */
        gotDiscounts: [], /* Массив со скидками */
        isLoading: false
    },
    getters: {
        GET_DISCOUNT_BY_ID(state) {
        return function(payload) {
            //тут не строгое равенство, т.к. в dis.json значения id прописаны в строковом типе. 
            const indexItem = state.gotDiscounts.findIndex((item) => item.id == payload); 
                if (indexItem !== -1) {
                return state.gotDiscounts[indexItem].percent
                }
            }
        },
        GET_INSTOCK_BY_ID(state) {
            return function(payload) {
                //тут не строгое равенство, т.к. в dis.json значения id прописаны в строковом типе. 
                const indexItem = state.gotDiscounts.findIndex((item) => item.id == payload); 
                if (indexItem !== -1) {
                  return state.gotDiscounts[indexItem].stock  
                }
            }
            },
        //суммарная скидка:
        cartTotalDiscount(state, getters, rootState, rootGetters) {
            const totalDiscount = rootState.cartArray.reduce((sum, item) => {
                return (sum + (item.price * item.quantity * (getters.GET_DISCOUNT_BY_ID(item.id)/100)))
            },0);
            return totalDiscount;
        }
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
        //Основной запрос по товарам
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
        //Запрос по скидкам
        async getDiscounts({commit}) {
            try {
                const dataDis = await fetch(BASE_DISCOUNTS_URL);
                const jsonDis = await dataDis.json();
                // console.log(jsonDis);
                commit('SET_DISCOUNTS', jsonDis);
            } catch (error) {
                console.error('Ошибка при получении списка скидок:', error);
            }
        }
        // getDiscountsByCategory({commit}, payload) {
        //     commit('GET_DISCOUNT_BY_CATEGORY', payload)
        // }
    }
}