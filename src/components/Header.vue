<template>
  <div class="header-box">
    <div class="header-box__item">
      <img
        src="../assets/images/heart_bag.png"
        alt="heart"
        width="32px"
        height="44px"
      />
      <div class="header-box__item-dobro">Дари добро</div>
    </div>

    <div class="header-box__item">
      <a href="https://beeline.kz/" target="_blank">
        <div class="header-box__item-logo">
          <img
            src="../assets/images/Beeline_logo.png"
            alt="beeline_logo"
            width="36px"
            height="36px"
          />
        </div>
      </a>
    </div>
    <!-- <div class="header-box__item"></div> -->
    <div class="header-box__item-links">
      <router-link to="/">Продукция</router-link>

      <router-link to="/partner">Стать партнером</router-link>

      <router-link to="/about">О проекте</router-link>
    </div>
    <!-- <div class="header-box__item"></div> -->
    <!-- <div class="header-box__item"></div> -->
    <div class="header-box__item">
      <div class="header-box__item_button">
        <img src="../components/icons/search_magnifier_icon.svg" alt="search" />
      </div>
      <div class="header-box__item_button">
        <img src="../components/icons/profile_icon.svg" alt="profile" />
      </div>
      <router-link to="/cart">
        <div class="header-box__item_button cart">
          <img
            src="../components/icons/shopping_bag_icon.svg"
            alt="cart_icon"
          />
          <transition name="shaketext">
            <div class="cart_count" :key="cartGetter.length">
              {{ cartGetter.length }}
            </div>
          </transition>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapGetters(["cartGetter"]),
  },
};
</script>

<style lang="scss" scoped>
/* Стиль для контейнера шапки */
.header-box {
  display: flex;
  background-color: white;
  border-radius: 5px;
  // padding: 5px 30px 5px 30px;
  margin: 0 auto;
  width: 1280px;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
  &__item {
    display: flex;
    width: 15rem;
    height: 80%;
    // border: 1px solid red;
    align-items: center;
    justify-content: space-around;
    font-size: 0.9rem;
    font-weight: 600;
    font-family: "Ubuntu", sans-serif;
    &_button {
      width: 32px;
      height: 32px;
      border: none;
      background-color: inherit;
    }
    &-dobro {
      font-family: Montserrat;
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
      margin-left: 1rem;
    }
    &-logo {
      margin-left: 1rem;
    }
    &-links {
      display: flex;
      justify-content: center;
      flex-grow: 1;
      // border: 1px solid salmon;
      gap: 1rem;
      font-family: Montserrat;
      font-size: 1rem;
      font-weight: 500;
      line-height: 20px;
      text-align: left;
    }
  }
  &__item:nth-child(1) {
    border-right: 2px solid grey;
    justify-content: start;
  }
  &__item:nth-child(2) {
    justify-content: start;
    width: 5rem;
  }
  &__item:nth-child(4) {
    width: 10rem;
    // justify-content: center;
  }
}

.cart {
  position: relative;
  &_count {
    position: absolute;
    top: -2px;
    right: -6px;
    color: white;
    width: 1rem;
    height: 1rem;
    text-align: center;
    border-radius: 50%;
    background-color: #dc2840;
  }
}

.shaketext-enter-active {
  animation: scaleUp 0.3s;
}
.shaketext-leave-to,
.shaketext-leave-active {
  display: none;
}

a {
  cursor: url("../components/icons/Hand-icon.png"), auto;
}

@keyframes scaleUp {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
