<template>
<div class="mestra">
 <div class="opcionais">    
    
    <h4 class="mb-3"><b>Opcionais:</b></h4>
    <div class="checa" >
        <b-form-checkbox  v-model="arCondicionado" value=true  name="check-button" switch class="text-left">
          <h4>Ar Condicionado</h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="retrovisor" value=true  name="check-button" switch class="text-left">
          <h4>Retrovisor elétrico </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="rodas" value=true  name="check-button" switch class="text-left">
          <h4>Roda de Liga Leve </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="cambio" value=true  name="check-button" switch class="text-left">
          <h4>Câmbio Automático </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="farois" value=true  name="check-button" switch class="text-left">
          <h4>Faróis de Milha </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="vidros" value=true  name="check-button" switch class="text-left">
          <h4>Vidros Elétrico </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="travas" value=true  name="check-button" switch class="text-left">
          <h4>Travas e Alarmes </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="limpador" value=true  name="check-button" switch class="text-left">
          <h4>Limpador Trazeiro </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="desembassador" value=true  name="check-button" switch class="text-left">
          <h4>Desembassador Trazeiro</h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="teto" value=true  name="check-button" switch class="text-left">
          <h4>Teto Solar </h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="flex" value=true  name="check-button" switch class="text-left">
          <h4>Flex</h4>
        </b-form-checkbox>
        <b-form-checkbox  v-model="gnv" value=true  name="check-button" switch class="text-left">
          <h4>Com GNV </h4>
        </b-form-checkbox>
   </div> 
          
</div><!-- optionais end -->
     <div class="savar mt-2 text-right">
          <b-button @click="salvaOpcionais">Salvar</b-button>
    </div>
</div>
  
</template>

<script>
export default {
  data() {
      return {
        arCondicionado: '',
        retrovisor:'',
        rodas:'',
        cambio:'',
        farois:'',
        vidros:'',
        travas:'',
        limpador:'',
        desembassador:'',
        teto:'',
        flex:'',
        gnv:'',
        selected: [], // Must be an array reference!        
      }
    },
  methods: {
      salvaOpcionais(){
         //this.selected.push(this.options.value)
         const opcionais = {
           arCondicionado: this.arCondicionado,
           cambio: this.cambio,
           desembassador: this.desembassador,
           farois: this.farois,
           flex: this.flex,
           gnv: this.gnv,
           limpador: this.limpador,
           retrovisor: this.retrovisor,
           rodas: this.rodas,
           teto: this.teto,
           travas: this.travas,
           vidros: this.vidros,
         }
         this.$store.dispatch("addOpcionais", opcionais);
         console.log(opcionais)
      }
  }
  
}
</script>

<style lang='scss' scoped>
 .opcionais{
     min-width: 320px;
     border-radius:14%;
     font-size: 16px;
     padding: 7%;
    .my-buttons .active {
     color: #fff !important;
     background-color: #28a745 !important;
     border-color: #28a745 !important;
   }
     h4{
         font-size:1.1;
         color: rgb(129, 129, 129);
         font-weight:600;
     }
     
 }
</style>