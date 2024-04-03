<script>
import { state } from '../state.js'


export default {
    name: "ProductCard",
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
        <div v-if="this.state.filteredProducts.length > 0" id="myResults">
            <ul>
                <li v-for="product in this.state.filteredProducts">
                    <div>Titolo:{{ product.title }}</div>
                    <div>Titolo Originale:{{ product.original_title }}</div>
                    <div>Lingua Originale:{{ product.original_language }}</div>
                    <div>Voto:{{ product.vote_average }}</div>

                </li>
            </ul>

        </div>
    </main>

</template>