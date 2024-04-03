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
    <div id="search-bar">
        <!--Test
        <p>{{ this.state.searchedString }}</p> -->
        <input type="text" placeholder="Cerca un Film..." v-model="this.state.searchedString">
    </div>
    <button @click="this.state.searchProduct()">Cerca</button>
    <div v-if="this.state.filteredProducts.length>0" id="myResults">
        <ul>
            <li v-for="product in this.state.filteredProducts">
                <div>Titolo:{{product.title}}</div>
                <div>Titolo Originale:{{ product.original_title}}</div>
                <div>Lingua Originale:{{ product.original_language}}</div>
                <div>Voto:{{ product.vote_average}}</div>

            </li>
        </ul>

    </div>

</template>

<style lang="scss"></style>
