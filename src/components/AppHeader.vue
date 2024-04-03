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

</template>

<style lang="scss"></style>
