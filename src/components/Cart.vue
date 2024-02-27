<template>
    <div>This is cart component</div>
    <vCartItem />
    <vCartItem />
    <vCartItem />
    <vCartItem />
</template>

<script>
import vCartItem from '../components/Cart-item.vue'

export default {
    name: "Cart",
    components: {
        vCartItem
    }
}


</script>