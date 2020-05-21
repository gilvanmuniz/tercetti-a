<template>
<div class="mestra">
 <div class="opcionais">    
  
    <!-- <b-form-group label="Opcionais e Características">
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        name="flavour-3a"
      >
        <div class="label">{{ option.text }}</div>
      </b-form-checkbox>
    </b-form-group> -->
    <h4 class="mb-3"><b>Opcionais:</b></h4>
    <div class="checa" v-for="(option, i) in options" :key="i">
        <b-form-checkbox  v-model="checked"  name="check-button" switch class="text-left">
          <h4>{{ option.text}} </h4>
        </b-form-checkbox>
   </div> 
          
</div><!-- optionais end -->
     <div class="savar mt-2 text-right">
          <b-button >Salvar</b-button>
    </div>
</div>
  
</template>

<script>
export default {
  data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Ar Condicionado', value: 'orange' },
          { text: 'Retrovisor elétrico', value: 'apple' },
          { text: 'Rodas de Liga Leve', value: 'pineapple' },
          { text: 'Câmbio Automático', value: 'pineapple' },
          { text: 'Faróis de Milha', value: 'pineapple' },
          { text: 'Vidros Elétricos', value: 'pineapple' },
          { text: 'Travas e Alarme', value: 'pineapple' },
          { text: 'Limpador Trazeiro', value: 'pineapple' },
          { text: 'Desembassador Trazeiro', value: 'pineapple' },
          { text: 'Teto Solar', value: 'pineapple' },
          { text: 'Flex', value: 'pineapple' },
          { text: 'Com GNV', value: 'grape' }
        ]
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