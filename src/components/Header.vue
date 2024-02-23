<template>
    <nav>
        <div class="header-box">
            <div class="header_box_item"></div>
            <div class="header_box_item"></div>
            <div class="header_box_item"><router-link to="/">Продукция</router-link></div>
            <div class="header_box_item"><router-link to="/partner">Стать партнером</router-link></div>
            <div class="header_box_item"><router-link to="/about">О проекте</router-link></div>
            <div class="header_box_item"></div>
            <div class="header_box_item"></div>
            <div class="header_box_item"><a href="#">Sign Up</a></div>
            <div class="header_box_item"><a href="#">Log In</a></div>

        </div>
    </nav>
</template>

<script>
    export default {
    name: 'Header'
    }

</script>

<style>
/* Стиль для контейнера шапки */
.header-box {
    display: flex;
    background-color: #000000;
    border-radius: 5px;
    padding: 5px 30px 5px 30px;
    margin: 0 auto;
    width: 1280px;
    height: 8rem;
    align-items: center;
    justify-content: center;
  }

/* Стиль для элемента шапки */
.header_box_item {
    display: flex;
    width: 15rem;
    height: 80%;
    /* border: 1px solid red; */
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    /* flex-grow: 1; */
}

/* Разные кастомизации для элементов шапки */
.header_box_item:nth-child(6) {
    border-right: 3px solid white;
}
.header_box_item:nth-child(1) {
    gap: 1rem;
    /* padding-top: 1rem; */
    font-size: 3rem;
}

.header-box a:hover {
    color: rgb(27, 230, 0);
}
</style>