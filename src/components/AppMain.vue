<script>
import { state } from '../state.js'
import ProductCard from "../components/ProductCard.vue"

export default {
    name: "AppMain",
    components: {
        ProductCard,
    }, 
    data() {
        return {
            state,
        }
    },
    methods: {
        
    }
    }
</script>

<template>
    <main class=" ">
        <ProductCard />
     </main>

</template>

<style></style>