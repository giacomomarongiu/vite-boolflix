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
            productsToPrint: [],
        }
    },

    mounted() {
        this.state.giveMeGenres()
    }

}
</script>

<template>
    <main class=" ">
        <div class="container">
            <div v-if="state.moviesFilter.length > 0"> Movies Genres selected:
                <span v-for="genre in state.moviesFilter">{{ genre }} </span>
            </div>
            <div v-if="state.seriesFilter.length > 0"> Movies Genres selected:
                <span v-for="genre in state.seriesFilter">{{ genre }} </span>
            </div>
            
            <div class="row" v-if="this.state.filteredProducts.length > 0">
                <ProductCard :product="product" v-for="product in state.filteredProducts" />
            </div>
        </div>
    </main>

</template>

<style></style>