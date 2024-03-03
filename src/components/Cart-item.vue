<template>
    <div class="cart_item">
        <div class="cart_item__img" :style="backgroundImage"></div>
        <div class="cart_item__description">{{ cartItemArray.description }}</div>
        <div class="cart_item__actions">{{ cartItemArray.quantity }}</div>
    </div>
</template>

<script>
export default {
    name: "Cart-item",
    data() {
        return {
            backgroundImage: `background-image: url('${this.cartItemArray.image}')`
        }
    },
    props: ['cartItemArray'],
    mounted() {
     
    //  this.cartItemArray.quantity = 1;
     console.log('Я смонтирован!');
    // Копируем объекты из массива productsFromParent и добавляем поле "количество"
        // const cartItemArrayLocal = this.cartItemArray.map((product) => ({
        // ...product,
        // quantity: 0,
        // }));
        // console.log(cartItemArrayLocal);
  },
}


</script>

<style lang="scss">

.cart_item {
    display: flex;
    width: 65rem;
    height: 10rem;
    align-items: center;
    justify-content: space-around;
    background-color: antiquewhite;
    &__img {
        display: block;
        background-color: aquamarine;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        width: 10rem;
        height: 9rem;
        
    }
    &__description {
        display: block;
        background-color:bisque;
        width: 40rem;
        height: 9rem;
    }
    &__actions {
        display: block;
        background-color: rgb(255, 191, 127);
        width: 10rem;
        height: 9rem;
    }
}

</style>