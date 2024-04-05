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
            <div class="search">
                <!--v-model mi permette di aggiornare la stringa searchedString nello state-->
                <!--Al @enter chiamo la funzione searchProduct()-->
                <input class="searchTerm" type="text" placeholder="Cerca uno show..." v-model="this.state.searchedString"
                    @keyup.enter="this.state.searchProduct()">
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
                width: 100%;
                border: 2px solid #ff0202;
                padding: 5px;
                height: 20px;
                border-radius: 5px;
                outline: none;
                color: #0c0000;
            }
    }
}
</style>
