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

            <!--Filtri per genere-->
            <div class="filters container">

                <!--Filtri per film-->
                <h2> Movies:</h2>
                <div class="movies">
                    <div class="movie" v-for="(movie_type, index) in state.moviesGenres">
                        <input type="checkbox" :id="movie_type" :value="movie_type" v-model="state.moviesFilter"
                            @change="state.filterByGenre()">
                        <label :for="movie_type"> {{ movie_type }} </label>
                    </div>
                </div>
                <!--/Filtri per film-->

                <br>

                <!--Filtri per serieTV-->
                <h2>TV Shows:</h2>
                <div class="series">
                    <div class="serie" v-for="(series_type, index) in state.seriesGenres">
                        <input type="checkbox" :id="series_type" :value="series_type" v-model="state.seriesFilter"
                            @change="state.filterByGenre()">
                        <label :for="series_type"> {{ series_type }} </label>
                    </div>
                </div>
                <!--/Filtri per serieTV-->

            </div>
            <!--/Filtri per genere-->


            <div class="row" v-if="this.state.filteredProducts.length > 0">
                <ProductCard :product="product" v-for="product in state.filteredProducts" />
            </div>
        </div>
    </main>

</template>

<style>
.filters {
    padding: 2%;
        text-align: center;

    >* {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        >* {
            padding: 1px;
            min-width: 33%;
        }
    }
     h2{
        background-color: black;
        color:red;
        margin-bottom: 1rem;
    }

}
</style>