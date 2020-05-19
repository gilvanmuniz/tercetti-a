<template>
 <div class="container">
   <div class="clientes">
    <div class="calendar">
      <Calendar />
    </div>
    <div class="cadastro-clientes">
      <CadastroClientes />
    </div>    
    <div class="lista">
      <h3>Clientes:</h3>
      <ul>
       <li v-for="(cliente, i) in clientes" :key="i"><h4>{{ cliente.clienteName + ' - ' + cliente.clienteFone }}</h4></li>
     </ul>
    </div>    
    <Menus />
  </div>
  <div class="footer">
    <Footer />
  </div>
    
 </div>
  
</template>

<script>
import Menus from "./../components/Menus";
import CadastroClientes from "./../components/CadastroClientes";
import Calendar from './../components/Calendar'
import Footer from './../components/Footer'
export default {
  components: {
    Menus,
    CadastroClientes,
    Calendar,
    Footer
  },
  computed: {
    clientes() {
      return this.$store.getters.clientes;
    },
  },
  methods: {
     addClientes() {
       const add = {
         clienteId:1, 
         clienteName:'TESTE', 
         clienteFone:'(35) 99999-0000',
         preferencia: 'HONDA'
       }
       this.$store.dispatch('addClientes', add)
     }
  }
};
</script>

<style lang="scss" scoped>
.clientes {
  color: white;
  display: flex;
  justify-content: space-around;
  align-items:center;
   .calendar{
    width: 30%;
    max-height: 20%;
    margin-left: 0.4%;
  }
  .cadastro-clientes{
    width:99%;
    margin-left: 2%;
    margin-top: -2%;
  }
  .lista{
    width: 56%;
    padding: 2%;
    margin-left: 7%;
    margin-top: -4%;
   
    ul{
      list-style: none;
      margin-left:-14%;
      li{
        width: 99%;
        border: 1px solid white;
        margin: 4px;
        border-radius: 7px;
      }
    }
  }
   .menus{
    width: 18%;
    margin-right: 2.5%;
    align-items: center; 
    margin-top:-0.7%;   
  }
} /* clientes end */
.footer{  
  padding: 10px;
}
</style>

