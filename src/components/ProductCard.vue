<script>
import { state } from '../state.js'
import { flags } from "../flags.js"

export default {
    name: "ProductCard",
    data() {
        return {
            state,
            flags,
            myFlag: "",
        }
    },
    methods: {
        findMyFlag(language) {
            this.myFlag="";
            console.log(language);
            this.flags.forEach(element => {
                if (language == element.lang)
                console.log("true"); {
                    this.myFlag = element.img
                    console.log(this.myFlag);
                    return true
                }
            })
        }
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
                    <div>Lingua Originale: {{ product.original_language }}</div>
                    <span v-if="findMyFlag(product.original_language)">
                        <img class="flag" :src=this.myFlag alt="">
                    </span>
                    <span v-else>
                        <img class="flag" src="../assets/imgs/onu.png" alt="">
                    </span>
                    <div>Voto:{{ product.vote_average }}</div>

                </li>
            </ul>

        </div>
    </main>

</template>

<style>
.flag{
    width: 40px;
    height: 20px;
}
</style>