<template>
    <div class="cart_item">
        <div class="cart_item__img"></div>
        <div class="cart_item__description"></div>
        <div class="cart_item__actions"></div>
    </div>
</template>

<script>
export default {
    name: "Cart-item",
    data() {
        return {

        }
    }
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