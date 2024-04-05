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
            <div class="filters">
                <!--Filtri per film-->
                <div> Movies:
                    <span class="movies" v-for="(movie_type, index) in state.moviesGenres">
                        <input type="checkbox" :id="movie_type" :value="movie_type" v-model="state.moviesFilter"
                            @change="state.filterByGenre()">
                        <label :for="movie_type">{{ movie_type }}</label>
                    </span>
                </div>

                <br>

                <!--Filtri per serieTV-->
                <div> TV Shows:
                    <span class="series" v-for="(series_type, index) in state.seriesGenres">
                        <input type="checkbox" :id="series_type" :value="series_type" v-model="state.seriesFilter"
                            @change="state.filterByGenre()">
                        <label :for="series_type">{{ series_type }}</label>
                    </span>
                </div>

            </div>
            <div class="row" v-if="this.state.filteredProducts.length > 0">
                <ProductCard :product="product" v-for="product in state.filteredProducts" />
            </div>
        </div>
    </main>

</template>

<style></style>