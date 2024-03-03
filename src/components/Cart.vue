<template>
    <div>This is cart component</div>
    <!-- Отрисовываем элементы корзины -->
    <vCartItem v-for="item in cartArray" :key="item.id" :cartItemArray="item"> 
    </vCartItem>
</template>

<script>
import vCartItem from '../components/Cart-item.vue'
import { mapState } from 'vuex';

export default {
    name: "Cart",
    computed: {
        ...mapState(['cartArray'])
    },
    components: {
        vCartItem
    }
}


</script>