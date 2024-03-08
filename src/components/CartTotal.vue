<template>
    <div class="order">
        <div class="order__details">
            <h4>Детали заказа</h4>
            <div class="order__details-buy">
                <div>Покупки:</div>
                <div>{{ totalSum }}&#36;</div>
            </div>
            <div class="order__details-delivery">
                <div>Доставка:</div>
                <div>{{ Math.ceil(totalSum * 0.01) }}&#36;</div>
            </div>
            <div class="order__details-discount">
                <div>Скидка:</div>
                <div>10000</div>
            </div>
            <div class="order__details-total">
                <div>Всего:</div>
                <div>1000</div>
            </div>
            <button class="order__details-button">Оформить заказ</button>
            
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';


export default {
    name: "CartTotal",
    computed: {
        ...mapState(['cartArray']),
        ...mapGetters(['cartTotalSum']),
    totalSum() {
        return this.cartTotalSum;
    }
    }
    
}

</script>

<style lang="scss">

.order {
    border: 1px solid blueviolet;
    min-height: 350px;
    padding: 23px;
    &__details {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        &-buy, &-delivery, &-discount {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        &-total {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            font-weight: bold;
        }
        &-button {
            height: 45px;
            border-radius: 5px;
            color: white;
            background-color: red;
            font-weight: bold;
            transition: 0.4s;
        }
        &-button:hover {
            transform: scale(1.04);
            background-color: white;
            color: red;
        }
    }
}

</style>


