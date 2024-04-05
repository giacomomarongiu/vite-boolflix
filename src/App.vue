<script >
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue"
import { state } from '../src/state.js'

export default {
  name: "App",
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      state,
    }
  }
}
</script>

<template>
<AppHeader />
<AppMain />
</template>

<style scoped>

</style>
