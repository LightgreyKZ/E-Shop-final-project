<template>
    <div class="cart-container">
      <h3>Cart</h3>
      <vCart />
    </div>
  </template>
  
  <script>
  import vCart from "@/components/Cart.vue";
  
  export default {
    name: "Cart",
    components: {
        vCart
    },
  };
  </script>
  
  <style>
  </style>