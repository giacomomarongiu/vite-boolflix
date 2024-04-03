<script>
import { flags } from "../flags.js"

export default {

    name: "ProductCard",
    props: {
        product: Object
    },
    data() {
        return {
            flags,
            imgUrl: "https://image.tmdb.org/t/p/w200",
        }
    },
    methods: {

    }
}
</script>

<template>

    <div class="col-4">
        <div class="card">

            <div class="card-img">
                <img v-if="product.poster_path != null" class="card-img" :src="(this.imgUrl) + product.poster_path"
                    alt="">
                <div v-else class="img-null"> File non presente </div>
            </div>


            <div class="card-bottom">
                <!--Titolo-->
                <div v-if="product.title">Titolo: {{ product.title }}</div>
                <div v-else>Titolo: {{ product.name }}</div>
                <!--Titolo Originale-->
                <div v-if="product.original_title">Titolo Originale: {{ product.original_title }}</div>
                <div v-else>Titolo Originale: {{ product.original_name }}</div>

                <span>Lingua Originale: </span>
                <span v-if="this.flags.includes(product.original_language)">
                    <img class="flag" :src='"../src/assets/imgs/" + product.original_language + ".png"' alt="">
                </span>
                <span v-else>
                    <img class="flag" src="../assets/imgs/onu.png" alt="">
                </span>
                <div>Voto: {{ Math.ceil(product.vote_average / 2) }}
                    <span v-for="index in (Math.ceil(product.vote_average / 2))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>
            </div>
        </div>


        <br>
    </div>

</template>

<style scoped>
.flag {
    width: 30px;
    height: 15px;
}


</style>