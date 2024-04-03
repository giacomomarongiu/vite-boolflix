<script >
import { state } from '../src/state.js'

export default {
  name: "App",
  //components: {},
  data() {
    return {
      state,
    }
  },
  methods: {}
}
</script>

<template>
  <h1>{{this.state.message}}</h1>

</template>

<style scoped>

</style>
