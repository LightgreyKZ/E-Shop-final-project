<template>
    <vHeader />
    <div class="cart_wrapper">
      <div class="breadcrumb">
        <router-link to="/">Главная</router-link><span> - </span>
        <router-link to="/cart">Корзина</router-link>
      </div>
      
      <vCart />
    </div>
      
</template>
  
  <script>
  import vCart from "@/components/Cart.vue";
  import vHeader from "@/components/Header.vue"
  
  export default {
    name: "Cart",
    components: {
        vCart,
        vHeader,
    },
  };
  </script>
  
<style scoped>

.cart_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.breadcrumb {
  margin-top: 1rem;
  font-family: monospace ;
  font-size: 0.9rem;
}

</style>