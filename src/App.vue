<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"><img src="./assets/tercetti-autos.png" width="21%" alt="logo"></router-link> |
      <router-link to="/about" class="estoque">Estoque</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  background-color: black;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  justify-content: space-between;
  margin-left: -3%;
  padding: 20px;
  background-color: gray;
  margin-bottom:2%;
  .estoque{
     margin-left: -21%;
     margin-right: 7%;
     color:white;

  }

  a {
    font-weight: bold;
    color: #5a7590;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
