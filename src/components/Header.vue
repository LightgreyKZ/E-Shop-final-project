<template>
    <nav>
        <div class="header-box">
            <div class="header_box_item">Дари добро</div>
            <div class="header_box_item">Beeline</div>
            <div class="header_box_item"></div>
            <div class="header_box_item"><router-link to="/">Продукция</router-link></div>
            <div class="header_box_item"><router-link to="/partner">Стать партнером</router-link></div>
            <div class="header_box_item"><router-link to="/about">О проекте</router-link></div>
            <div class="header_box_item"></div>
            <div class="header_box_item"></div>
            <div class="header_box_item">
                <button class="header_box_item_button">Search</button>
                <button class="header_box_item_button">Profile</button>
                <p>{{ cartGetter.length }}</p>
                <router-link to="/cart">
                <button class="header_box_item_button">
                    <img src="../components/icons/icon_cart.png" alt="cart_icon">
                </button>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
    name: 'Header',
    computed: {
        ...mapGetters(['cartGetter'])
    }
    }

</script>

<style scoped>
/* Стиль для контейнера шапки */
.header-box {
    display: flex;
    background-color: white;
    border-radius: 5px;
    padding: 5px 30px 5px 30px;
    margin: 0 auto;
    width: 1280px;
    height: 6rem;
    align-items: center;
    justify-content: space-between;
  }

/* Стиль для элемента шапки */
.header_box_item {
    display: flex;
    width: 15rem;
    height: 80%;
    /* border: 1px solid red; */
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: bold;
    /* flex-grow: 1; */
}

/* Разные кастомизации для элементов шапки */
.header_box_item:nth-child(1) {
    border-right: 2px solid grey;
}
/* .header_box_item:nth-child(1) {
    gap: 1rem;
    font-size: 3rem;
} */

.header-box a:hover {
    color: rgb(27, 230, 0);
}
</style>