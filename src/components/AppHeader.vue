<script>
import { state } from '../state.js'
export default {
    name: "AppHeader",
    data() {
        return {
            state,
        }
    },
}
</script>

<template>
    <header class="">
        <div class="nav container">
            <h2 class="logo">BOOLFLIX</h2>


            <!--Filtri per genere-->

            <!--Filtri per film-->
            <div class="wrapper">
                <div class="genre"> Movies Category</div>
                <div class="movies">
                    <div class="movie" v-for="(movie_type, index) in state.moviesGenres">
                        <input type="checkbox" :id="movie_type" :value="movie_type" v-model="state.moviesFilter"
                            @change="state.filterByGenre(); ">
                        <label :for="movie_type"> {{ movie_type }} </label>
                    </div>
                </div>
            </div>
            <!--/Filtri per film-->

            <br>

            <!--Filtri per serieTV-->
            <div class="wrapper">
                <div class="genre">TV Shows</div>
                <div class="series">
                    <div class="serie" v-for="(series_type, index) in state.seriesGenres">
                        <input type="checkbox" :id="series_type" :value="series_type" v-model="state.seriesFilter"
                            @change="state.filterByGenre()">
                        <label :for="series_type"> {{ series_type }} </label>
                    </div>
                </div>
            </div>
            <!--/Filtri per serieTV-->

            <!--/Filtri per genere-->


            <div class="search">
                <!--v-model mi permette di aggiornare la stringa searchedString nello state-->
                <!--Al @enter chiamo la funzione searchProduct()-->
                <input class="searchTerm" type="text" placeholder="Cerca uno show..."
                    v-model="this.state.searchedString" @keyup.enter="this.state.searchProduct()">
            </div>
        </div>
    </header>

</template>

<style>
header {
    height: 40px;
    background-color: black;
    color: red;
    display: flex;
    align-items: center;

    .nav {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            font-size: large;
            font-weight: bolder;
        }

        .searchTerm {
            border: 1px solid #ff0202;
            padding: 5px;
            height: 20px;
            border-radius: 5px;
            outline: none;
            color: #0c0000;
        }

        .wrapper {
            position: relative;
                padding: 1rem;
            .movies, .series {
                padding: 1rem;
                position: absolute;
                z-index: 1;
                top:35pxpx;
                display: none;
                height: 150px;
                width: 400px;
                border-radius: 10px;
                background-color: #ff0202;
                    border: 1px solid black;
                color: black;
                flex-direction: column;
                flex-wrap: wrap;
            }
        }

        .wrapper:hover .movies {
            display: flex;
        }

        .wrapper:hover .series {
            display: flex;
            right: 0;
        }

    }
}
</style>
