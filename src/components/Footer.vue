<template>
    <div class="footer_wrapper">
        <div class="footer_wrapper1280">
        <div class="footer-icons">
            <div class="footer-icons__dobro">
                <img src="../assets/images/heart_bag.png" alt="heart" width="32px" height="44px">
                <div class="footer-icons__dobro-word">Дари добро</div>
            </div>
            <div class="footer-icons__icons">
                <div><a href="#"><img src="../components/icons/telegramm_32.png" alt="telegram"></a></div>
                <div><a href="#"><img src="../components/icons/tvitter_32.png" alt="tvitter"></a></div>
                <div><a href="#"><img src="../components/icons/whatsapp_32.png" alt="whatsapp"></a></div>
                <div><a href="#"><img src="../components/icons/instagram_32.png" alt="instagram"></a></div>
            </div>
        </div>
        <div class="footer-links">
            <router-link to="/partner">Стать партнером</router-link>
            <router-link to="/">Доставка</router-link>
            <router-link to="/about">О проекте</router-link>
        </div>
        </div>
    </div>
</template>

<script>
// export default {
//   name: "footer-vue",
// };
</script>

<style lang="scss" scoped>
.footer_wrapper {
    width: auto;
    height: 176px;
    display: flex;
    // gap: 4rem;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-top: 1px solid #ECECEC;
 
}
.footer_wrapper1280 {
    display: flex;
    flex-direction: row;
    width: 1280px;
    gap: 9rem;
}
.footer-icons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // margin-left: 3rem;
    // border: 1px solid rgb(18, 1, 149);
    &__dobro {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        &-word {
            font-family: Montserrat;
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            text-align: left;
            margin-left: 1rem;
        }
    }
    &__icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 47px;
    }
}

.footer-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 108px;
    // border: 1px solid red;
    flex-grow: 1;
    // margin-left: 8rem;
}

</style>
