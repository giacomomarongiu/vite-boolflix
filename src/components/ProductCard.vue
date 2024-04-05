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

    <div class="col" v-if="product.isVisible">
        <div class="card">

            <div class="card-main">
                <img v-if="product.poster_path != null" class="card-img" :src="(this.imgUrl) + product.poster_path"
                    alt="">
                <img v-else class="img-null" src="../assets/imgs/none.png">
            </div>


            <div class="card-hover">
                <!--Titolo-->
                <div v-if="product.title">Titolo: {{ product.title }}</div>
                <div v-else>Titolo: {{ product.name }}</div>

                <!--Titolo Originale-->
                <div v-if="product.original_title">Titolo Originale: {{ product.original_title }}</div>
                <div v-else>Titolo Originale: {{ product.original_name }}</div>

                <!--Genere-->
                <div v-if="product.genres.length > 0">Genere:
                    <span v-for="genre in product.genres">{{ genre }}, </span>
                </div>

                <!--Lingua Originale-->
                <span>Lingua Originale: </span>
                <!--Se la ho stampo la bandiera-->
                <span v-if="this.flags.includes(product.original_language)">
                    <img class="flag" :src='"../src/assets/imgs/" + product.original_language + ".png"' alt="">
                </span>
                <!--Se no stampo badiera ONU-->
                <span v-else>
                    <img class="flag" src="../assets/imgs/onu.png" alt="">
                </span>

                <!--Voto-->
                <!--Divido ed arrotondo per eccesso-->
                <div>Voto: {{ Math.ceil(product.vote_average / 2) }}
                    <!--Stampo il totale delle stelline-->
                    <span v-for="index in (Math.ceil(product.vote_average / 2))">
                        <i class="fa-solid fa-star"></i>
                    </span>
                </div>

                <!--Cast-->
                <div v-if="product.cast.length > 0">Cast:
                    <!--Limito la mia stampa a 5 elemeti con slice-->
                    <span v-for="(name, index) in product.cast.slice(0, 5)">{{ name }} </span>

                </div>

                <!--Descrizione-->
                <div class="overview" > Descrizione:
                    <div v-if="product.overview">{{ product.overview }}</div>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>
.overview {
    max-height: 30%;
    overflow-y: scroll;
}
</style>