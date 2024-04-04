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
                <span><input type="text" placeholder="Cerca un Film..." v-model="this.state.searchedString"></span>
                <span><button @click="this.state.searchProduct()"
                        @keyup.enter="this.state.searchProduct()">Cerca</button></span>
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
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo{
        font-weight: bolder;
    }
}
</style>
