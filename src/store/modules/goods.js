const BASE_CATALOG_URL = 'https://fakestoreapi.com/products';
const BASE_DISCOUNTS_URL = 'http://localhost:3000/discounts';

export default {
    namespaced: true,
    state: {
        gotGoods: [],   /* Основной массив данных */
        gotDiscounts: [], /* Массив со скидками */
        localGoodsArray: [], /* Массив для компонента CardView */
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
        },
        //Получить название товара по ID (нужно для компонента CardView)
        GET_NAME_BY_ID(state) {
            return function(payload) {
                const indexItem = state.gotGoods.findIndex((item) => item.id == payload);
                if (indexItem !== -1) {
                   return state.gotGoods[indexItem].title; 
                }
            }
        }

    },
    mutations: {
        SET_GOODS(state, payload) {
            console.log('Я SET_GOODS');
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
            console.log('Я SET_DISCOUNTS');
            state.gotDiscounts = payload;
        },
        //Получаем 1 элемент массива товаров для карточки детального описания (CardView)
        GET_GOOD_BY_ID(state, payload) {
            
            console.log('Я внутри мутации GET_GOOD_BY_ID: ' + payload);
            // console.log(state.gotGoods);
                const indexItem = state.gotGoods.findIndex((item) => item.id == payload);
                console.log('indexItem который я нашел таков: ' + indexItem);
                if (indexItem !== -1) {
                  state.localGoodsArray = state.gotGoods[indexItem]; 
                  // return state.gotGoods[indexItem];
                }
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
                alert('Ошибка при получении списка скидок! Нужно запустить json-server: `npm install -g json-server`, затем json-server src/data/dis.json')
            }
        },
        async getGoodById({commit}, payload) {
            console.log('Я внутри экшена getGoodById: ' + payload);
            await commit('GET_GOOD_BY_ID', payload);
            
        }
        // getDiscountsByCategory({commit}, payload) {
        //     commit('GET_DISCOUNT_BY_CATEGORY', payload)
        // }
    }
}