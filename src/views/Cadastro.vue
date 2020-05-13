<template>
  <div class="cadastro">
    <div class="calendar">
      <Calendar />
    </div>
    <div class="formulario-auto">
      <CadastroAutos />
    </div>
    <div class="listcar">
      <ul>
        <li v-for="(car, i) in listcar " :key="i">{{ car }}</li>
      </ul>
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
      listcar: ['Compass 2.0', 'Jeep Renegate Turbo', 'Corrola luxo', 'Fiesta 1.8', 'Porshe', 'Mercedez M-3']
    }
  }
}
</script>

<style lang="scss" scoped>
.cadastro{
  display: flex;
  align-items: center;
  justify-content: space-around;
  .calendar{
    width: 21%;
  }
  .menus{
    width: 7%;
    margin-right: 2.5%;
  }
  .listcar{
    ul{
      list-style: none;
      li{
        color: white;
        font-size: 20px;
      }
    }
  }
}

</style>


