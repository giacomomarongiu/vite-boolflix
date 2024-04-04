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
            <div class="logo">BOOLFLIX</div>
            <div id="search-bar">
                <span><input type="text" placeholder="Cerca un Film..." v-model="this.state.searchedString"
                        @keyup.enter="this.state.searchProduct()"></span>
                <span><button @click="this.state.searchProduct()">Cerca</button></span>
            </div>
        </div>
    </header>

</template>

<style>

</style>
