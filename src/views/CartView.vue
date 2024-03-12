<template>
    <vHeader />
    <div class="cart_wrapper">
      <div class="breadcrumb">
        <router-link to="/">Главная</router-link><span> - </span>
        <router-link to="/cart">Корзина</router-link>
      </div>
      
      <vCart />
      <div class="footer_bottom">
        <vFooter />
      </div>
    </div>

    
      
</template>
  
  <script>
  import vCart from "@/components/Cart.vue";
  import vHeader from "@/components/Header.vue"
  import vFooter from "@/components/Footer.vue"
  
  export default {
    name: "Cart",
    components: {
        vCart,
        vHeader,
        vFooter
    },
  };
  </script>
  
<style scoped>

.cart_wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 1280px;
  margin: 0 auto;
}

.breadcrumb {
  margin-top: 1rem;
  font-family: monospace ;
  font-size: 0.9rem;
}

.footer_bottom {
  position: fixed;
  bottom: 0;
  /* width: 1280px; */
  /* margin: 0 auto; */
}

</style>