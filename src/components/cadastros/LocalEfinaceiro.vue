<template>
 <div class="mestra">
    <div class="local-financeiro">
      <div class="local-e-financeiro mb-3">
           <h4>Local:</h4>
           <!-- <b-form-radio-group >
            <b-form-radio value="Show Room" v-model="form.showRoom">Show Room</b-form-radio>
            <b-form-radio value="Site" v-model="form.site">Site</b-form-radio>
          </b-form-radio-group> -->
            <b-form-radio-group>
                 <b-form-radio v-model="site" value="Site" class="mb-1" size="lg">Site</b-form-radio>
                 <b-form-radio v-model="showRoom" value="Show Room" class="mb-1" size="lg">Show Room</b-form-radio>
            </b-form-radio-group>
          
      </div>
      <div class="local-e-financeiro">
          <h4>FINACEIRO:</h4>
          <b-form-checkbox v-model="proprio" value="propio" class="mb-1" size="lg">Própio</b-form-checkbox>
          <b-form-checkbox v-model="consignado" value="consignado" class="mb-1" size="lg">Consignado</b-form-checkbox>
         <b-form-input v-model="valorCompra" class="mb-1" placeholder="Valor da Compra"></b-form-input>
         <b-form-input v-model="valorLucro" class="mb-1" placeholder="Valor de Lucro"></b-form-input>
         <b-form-input v-model="valorTabela" class="mb-1" placeholder="Valor de Tabela"></b-form-input>
         <b-form-input v-model="Investimentos" class="mb-1" placeholder="Investimentos"></b-form-input>
         <hr>
         <b-form-input v-model="valorVenda" class="mb-1" placeholder="Valor de Venda"></b-form-input>
      </div>
            
  </div> <!-- local-financeiro end -->
    <div class="savar mt-2 text-right">
          <b-button @click="salveLocalFinanceiro" >Salvar</b-button>
    </div>
 </div> <!-- mestra end -->

</template>

<script>
export default {
 
 data(){
     return {
         local:'',
         showRoom: false,
         site: false,
         proprio: false,
         consignado:false,
         valorCompra:'',
         valorLucro:'',
         valorTabela:'',
         Investimentos:'',
         valorVenda:'',             
         
         localFinanceiro: []
     }
 },
 computed: {
     id(){
         return this.$store.getters.temperariaId
     }
 },
 methods: {
     salveLocalFinanceiro(){
          if(this.showRoom){
                 this.local = this.showRoom
             }
             else if(this.sit){
                this.local = this.site
             }
         const LocalFinanceiro ={
             local:this.local,            
             proprio: this.proprio,
             consignado: this.consignado,
             valorCompra: this.valorCompra, 
             valorLucro: this.valorLucro, 
             valorTabela: this.valorTabela,
             Investimentos: this.Investimentos,
             valorVenda: this.valorVenda,
       };
    //    console.log(this.localFinanceiro)
       
        this.$store.dispatch("addLocalFinanceiro", LocalFinanceiro);
        
     }// salveLocalFinanceiro end
 }
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