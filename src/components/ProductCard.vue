<script>
import { state } from '../state.js'
import { flags } from "../flags.js"

export default {
    name: "ProductCard",
    data() {
        return {
            state,
            flags,
        }
    },
    methods: {
        
    }
}
</script>

<template>
    <main class=" ">
        <div v-if="this.state.filteredProducts.length > 0" id="myResults">
            <ul>
                <li v-for="product in this.state.filteredProducts">
                    <!--Titolo-->
                    <div v-if="product.title">Titolo: {{ product.title }}</div>
                    <div v-else>Titolo: {{ product.name }}</div>
                    <!--Titolo Originale-->
                    <div v-if="product.original_title">Titolo Originale: {{ product.original_title }}</div>
                    <div v-else>Titolo Originale: {{ product.original_name }}</div>
                    
                    <span>Lingua Originale: </span>
                    <span v-if="this.flags.includes(product.original_language) ">
                        <img class="flag" :src='"../src/assets/imgs/" + product.original_language + ".png"' alt="">
                    </span>
                    <span v-else>
                        <img class="flag" src="../assets/imgs/onu.png" alt="">
                    </span>
                    <div>Voto:{{ product.vote_average }}</div>
                    <br>
                </li>
            </ul>

        </div>
    </main>

</template>

<style>
.flag{
    width: 30px;
    height: 15px;
}
</style>