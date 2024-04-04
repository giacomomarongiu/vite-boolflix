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
            productsToPrint:[],
        }
    },

    }
</script>

<template>
    <main class=" ">
        <div class="container">
            <div class="row" v-if="this.state.filteredProducts.length > 0">
                <ProductCard :product="product" v-for="product in state.filteredProducts" />
            </div>
        </div>
    </main>

</template>

<style>

    </style>