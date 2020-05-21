<template>
  <div class="barra">
    <div id="nav">
      <router-link class="logo" to="/"><img src="./../../assets/tercetti-autos.png" width="28%" alt="logo"></router-link>       
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  #nav {
  display: flex;
  justify-content:right;
  margin-left: -3%;
  padding: 8px;
  // background-color:  #707070;
  margin-bottom:2%;  
  .logo{    
    margin-top: 2%;
    margin-left: 88%;    
    img{
        width:60%;
    }
  }
  // a {
  //   font-weight: bold;
  //   color: #5a7590;
  //   text-decoration: none;

  //   &.router-link-exact-active {
  //     color: #000000;
  //   }
  // }
}
</style>