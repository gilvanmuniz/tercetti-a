<template>
<div>
  <BarraSuperior />
  <div class="cadastro mb-3">
   
    <div class="cadastro-autos ml-3">
      <CadastroAutos 
      :form="form"
      @dados="form = $event"  /> <!--  end -->    
      <b-button @click="addCarros">Cadastro</b-button>
      <!-- {{ form }} -->
    </div>

    <div class="opcionais">      
      <Opcionais />
    </div>
    <div class="local">
      <LocalEfinaceiro />
    </div> 
     <Menus class="menus" />     
  </div> <!-- cadastro end -->
  <div class="footer">
       <Footer />
  </div>
</div>
 
</template>

<script>
import BarraSuperior from './../components/barras/BarraSuperior'
import Menus from './../components/Menus'
import CadastroAutos from './../components/cadastros/CadastroAutos'
import Opcionais from './../components/Opcionais'
import LocalEfinaceiro from './../components/cadastros/LocalEfinaceiro'
import Footer from './../components/Footer'

export default {
  components: {
    BarraSuperior,
    Menus,
    Opcionais,
    CadastroAutos,    
    LocalEfinaceiro,
    Footer
  },
  data() {
    return {
        form:''
    }
  }, 
 computed: {
    
 },
  methods:{
    addCarros(){
      console.log(this.form.marca + ' - ' + this.form.modelo)
    }
  }
}
</script>

<style lang="scss" scoped>
.cadastro{
  display: flex;
  align-items: center;
  justify-content:space-between;
  box-sizing: border-box;
  width: 100%;
  padding: 2%;
  margin-top: -1.5%;
  margin-left: -3%;
  
  
  // .calendar{
  //   width: 21%;
  //   max-height: 20%;
  //   margin-left: 7%;
  // }
  .cadastro-autos{
    width: 96%;
    height:550px;
    margin-left: 0%;
    margin-top: -0%;
    margin-right: 2%;
    border-radius: 7%;   
  }
  .opcionais{
    background-color: white;
    color: black;
    border-radius: 4%;
    margin-right: 2%;
  }
  .local{
  margin-top: 2.2%;
  }
  .menus{
    width: 14%;
    margin-right: 2%;
    margin-top: -1%; 
  }
 
}
.footer{
  margin-top: 0%;
  padding:2%;
  min-height:240px;
}

</style>


