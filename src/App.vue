<template>
  <div id="app">
       <router-view/>
  </div>
</template>
<script>
export default {
  created() {
      this.$store.dispatch('initClientes')
      this.$store.dispatch('initCarros')
      this.$store.dispatch('initOpcionais')
      this.$store.dispatch('initTemperariaId')
  }
}
</script>

<style lang="scss">
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;  

} /* app end */

</style>
