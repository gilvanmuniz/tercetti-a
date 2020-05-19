<template>
  <div id="app">
    <div id="nav">
      <router-link class="logo" to="/"><img src="./assets/tercetti-autos.png" width="21%" alt="logo"></router-link> 
      <!-- <router-link to="/cadastro" class="estoque">Estoque</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  created() {
      this.$store.dispatch('initClientes')
      this.$store.dispatch('initCarros')
      // this.$store.dispatch.loadData()
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
}

#nav {
  display: flex;
  justify-content:end;
  margin-left: -3%;
  padding: 8px;
  // background-color: gray;
  margin-bottom:2%;
  .estoque{
     margin-left: -21%;
     margin-right: 7%;
     color:white;
  }
  .logo{
    margin-right:-7%;
    margin-top: 1%;
  }

  a {
    font-weight: bold;
    color: #5a7590;
    text-decoration: none;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
