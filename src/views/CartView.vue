<template>
      <vHeader />
      
      <vCart />
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