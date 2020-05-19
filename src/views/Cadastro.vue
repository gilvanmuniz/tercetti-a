<template>
  <div class="cadastro">
    <div class="calendar ml-3 ">
      <Calendar />
    </div>
    <div class="cadastro-autos ml-3">
      <CadastroAutos />
    </div>   
     <Menus class="menus" />
  </div>
</template>

<script>
import Menus from './../components/Menus'
import CadastroAutos from './../components/CadastroAutos'
import Calendar from './../components/Calendar'
export default {
  components: {
    Menus,
    Calendar,
    CadastroAutos
  },
  data() {
    return {
     
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
  
  .calendar{
    width: 21%;
    max-height: 20%;
    margin-left: 7%;
  }
  .cadastro-autos{
    width: 100%;
    margin-left: -1%;
    margin-top: -4%;   
  }
  .menus{
    width: 9%;
    margin-right: 2.5%;
    margin-top: -4%; 
  }
 
}

</style>


