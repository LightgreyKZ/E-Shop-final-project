<template>
    <div class="cart-container">
      <vHeader />
      <h3>Cart</h3>
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
        vHeader
    },
  };
  </script>
  
  <style>
  </style>