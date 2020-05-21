<template>
  <div class="barra">
    <div class="hoje">
        <h4>{{ diaagora }} -</h4><h4 class="ml-2">{{ dia.getHours()}}:{{ dia.getMinutes() }}</h4>
    </div>  
    <div id="nav">
      <router-link class="logo" to="/"><img src="./../../assets/tercetti-autos.png" alt="logo"></router-link> 
      <!-- <router-link to="/cadastro" class="estoque">Estoque</router-link> -->
    </div>
  </div>
</template>

<script>
export default {
  data (){
     return {
         dia: new Date(),
         diaagora: '',
         mesatual: ''
          
     }
 },
 methods: {
      diasemana(){
         this.diaagora
         switch(this.dia.getDay()){
             case 0 : this.diaagora = 'Domingo';
             break;
             case 1 : this.diaagora = 'Segunda';
             break;
             case 2 : this.diaagora = 'Terça Feira';
             break;
             case 3 : this.diaagora = 'Quarta Feira';
             break;
             case 4 : this.diaagora = 'Quita Feira';
             break;
             case 5 : this.diaagora = 'Sexta Feira';
             break;
             case 6 : this.diaagora = 'Sábado';
             break;
             
           }
         return this.diaagora
        },
 },

 created(){
     this.diasemana()
 }
}
</script>

<style lang="scss" scoped>
.barra{
    display: flex;
    justify-content: space-between;
    padding: 1.5%;
    .hoje{
        display: flex;
        justify-content: space-around;
        padding: 1.5%;
    }   
#nav {
  display: flex;
  justify-content:right;
  margin-left: -3%;
  padding: 8px;
  // background-color:  #707070;
  margin-bottom:2%;
  
  .logo{    
    margin-top: 1%;
    margin-left: 78%;
    margin-right: 14%;
    img{
        width: 250%;
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
}  /* barra end */
</style>