<template>
    <div class="order">
        <div class="order__details">
            <h4>Детали заказа</h4>
            <div class="order__details-buy">
                <div>Покупки:</div>
                <div>{{ totalSum }}&#36;</div>
            </div>
            <div class="order__details-delivery">
                <div data-tooltip="Рассчитывается как 1% от суммы заказа">Доставка:</div>
                <div>{{ totalDelivery }}&#36;</div>
            </div>
            <div class="order__details-discount">
                <div>Скидка:</div>
                <div>{{ totalDiscount }}&#36;</div>
            </div>
            <div class="order__details-total">
                <div>Всего:</div>
                <div>{{ totalOrder }}</div>
            </div>
            <button class="order__details-button" :disabled="!cartArray.length">Оформить заказ</button>
            
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
        ...mapGetters('goods',['cartTotalDiscount']),
    totalSum() {
        return parseFloat(this.cartTotalSum.toFixed(2));
    },
    totalDelivery() {
        let totalDeliv = this.cartTotalSum;
        return parseFloat((totalDeliv * 0.01).toFixed(2));
    },
    totalDiscount() {
        return parseFloat(this.cartTotalDiscount.toFixed(2));
    },
    totalOrder() {
        return parseFloat((this.totalSum + this.totalDelivery - this.totalDiscount).toFixed(2))
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

//Стиль для неактивной кнопки
button:disabled {
    background-color: #ccc;
    color: #999;
    padding: 5px 10px;
    border: none;
    cursor: not-allowed;
}

//всплывающая подсказка из интернета :)
[data-tooltip] {
  position: relative;
}

[data-tooltip]::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: -20px;
  left: 80%;
  transform: translateX(-50%);
  background-color: #333;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  opacity: 0;
  width: 10rem;
  transition: opacity 1s;
}

[data-tooltip]:hover::after {
  opacity: 1;
}


</style>


