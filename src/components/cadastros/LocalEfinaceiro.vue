<template>
 <div class="mestra">
    <div class="local-financeiro">
      <div class="local-e-financeiro mb-3">
           <h4>Local:</h4>
           <b-form-checkbox class="mb-1" size="lg">Show Room</b-form-checkbox>
           <b-form-checkbox class="mb-1" size="lg">Site</b-form-checkbox>
      </div>
      <div class="local-e-financeiro">
          <h4>FINACEIRO:</h4>
          <b-form-checkbox class="mb-1" size="lg">Própio</b-form-checkbox>
          <b-form-checkbox class="mb-1" size="lg">Consignado</b-form-checkbox>
         <b-form-input class="mb-1" placeholder="Valor da Compra"></b-form-input>
         <b-form-input class="mb-1" placeholder="Valor de Lucro"></b-form-input>
         <b-form-input class="mb-1" placeholder="Valor de Tabela"></b-form-input>
         <b-form-input class="mb-1" placeholder="Investimentos"></b-form-input>
         <hr>
         <b-form-input class="mb-1" placeholder="Valor de Venda"></b-form-input>
      </div>
            
  </div> <!-- local-financeiro end -->
    <div class="savar mt-2 text-right">
          <b-button >Salvar</b-button>
    </div>
 </div> <!-- mestra end -->

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 .local-financeiro{
     min-width: 299px;
     height: 540px;
     display: flex;
     flex-direction: column;
     justify-content: center;
     padding: 3%;
     margin-left: 7%;
     margin-top: 1%;
    // border: solid 1px white; 
     border-radius: 4%;
     background-color: rgb(139, 139, 139);
     .local-e-financeiro{
         background-color: rgb(92, 89, 89);
         display: flex;
         flex-direction: column;
         justify-content: start;
         align-items: flex-start;
         margin-left: 1%;
         border: solid 3px white; 
         border-radius: 7%;
         padding:4%;       
     }
     hr{
         border: solid white 1px;
         width: 100%;
     }
     .salvar{
         height: 1px;
     }
 }
</style>