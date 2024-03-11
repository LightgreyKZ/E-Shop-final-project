<template>
  <div class="header-box">
    <div class="header-box__item">Дари добро</div>
    <div class="header-box__item">Beeline</div>
    <div class="header-box__item"></div>
    <div class="header-box__item">
      <router-link to="/">Продукция</router-link>
    </div>
    <div class="header-box__item">
      <router-link to="/partner">Стать партнером</router-link>
    </div>
    <div class="header-box__item">
      <router-link to="/about">О проекте</router-link>
    </div>
    <div class="header-box__item"></div>
    <div class="header-box__item"></div>
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
  padding: 5px 30px 5px 30px;
  margin: 0 auto;
  width: 1280px;
  height: 6rem;
  align-items: center;
  justify-content: space-between;
  &__item {
    display: flex;
    width: 15rem;
    height: 80%;
    border: 1px solid red;
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
  }
  &__item:nth-child(1) {
    border-right: 2px solid grey;
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
  cursor: url("../components/icons/free-icon-hand-cursor-5781771.png"), auto;
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
