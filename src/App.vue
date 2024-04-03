<script >
import AppHeader from "./components/AppHeader.vue";
import { state } from '../src/state.js'

export default {
  name: "App",
  components: {
    AppHeader,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
<!--   <h1>{{this.state.message}}</h1>-->
<AppHeader />
</template>

<style scoped>

</style>
