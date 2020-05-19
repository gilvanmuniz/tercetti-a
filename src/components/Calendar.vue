<template>
  <div class="calendario">
      <div class="calendar">
          <div class="diahora">
              <h4><b>{{ diaagora + ', '}}</b></h4>
              <h4 class="ml-2"><b> {{ dia.getHours()}}:{{ dia.getMinutes() }}</b></h4>
          </div>
          <div class="todayday">
              <h1>{{dia.getDate() }}</h1>
              <h4>{{ mesatual }}</h4>
          </div> 
          <div class="agenda">
              <h6>AGENDA</h6>
              <span class="ml-4">8 Compromissos para hoje</span>
          </div>         
      </div>
      <div class="notas">
          <h2>Notas</h2>
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
          <input type="text">
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
 methods:{
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

        mes(){
            this.mesatual
           switch(this.dia.getMonth()){
               case 0 : this.mesatual = 'janeiro';
               break;
               case 1 : this.mesatual = 'Fevererio';
               break;
               case 2 : this.mesatual = 'Março';
               break;
               case 3 : this.mesatual = 'Abril';
               break;
               case 4 : this.mesatual = 'Maio';
               break;
               case 5 : this.mesatual = 'Junho';
               break;
               case 6 : this.mesatual = 'Julho';
               break;
               case 7 : this.mesatual = 'Agosto';
               break;
               case 8 : this.mesatual = 'Setembro';
               break;
               case 9 : this.mesatual = 'Outubro';
               break;
               case 10 : this.mesatual = 'Novembro';
               break;
               case 11 : this.mesatual = 'Dezembro';
               break;
           }
        }
 },
 mounted() {
     this.diasemana(),
     this.mes()   
  }
}    

</script>

<style lang="scss" scoped>
.calendario{
    width: 80%;
    min-width:260px;        
    .calendar{
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        align-items: center;
        color: grey;
        background-color: rgb(245, 239, 228);
        padding: 7%;
        border-radius:7%;
        max-height:260px;
        height:260px;
        .diahora{
            display: flex;
            justify-content:center;
            padding: 2%;
            margin-bottom: 4%;
        } /* diahora end */
        .todayday{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: -14%;
             h1{
                font-size: 7.5em;
                font-family: Avenir;
                font-weight: 900;
            }            
            h4{
                font-weight:700;
                margin-top: -28%;
                margin-bottom:14%;
                margin-left:28%;
            }
        }
        .agenda{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: -2%;
            h6{
                font-weight: 800;
            }
        }       
        
    }
    .notas{
        color: grey;
        background-color: rgb(245, 239, 228);
        margin-top: 14%;
        padding: 7%;
        border-radius: 6%;
        input{
            border: 0;
            border-bottom: solid 1px black;
            background-color: rgb(245, 239, 228);
            width: 100%;
        }
    }
}
</style>