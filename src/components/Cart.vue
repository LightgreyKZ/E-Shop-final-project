<template>
    <div>This is cart component</div>
    <vCartItem />
    <vCartItem />
    <vCartItem />
    <vCartItem />
    <p>{{ cartArray }}</p>
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