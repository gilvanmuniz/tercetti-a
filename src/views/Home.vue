<template>
  <div class="home">
    <div class="container">
      <div class="calendar">
        <Calendar />
      </div>
      <div class="vision">
        <h2>Visão Geral</h2>
        <div class="cheese">
          <img src="./../assets/color_cheese.png" width="120
          %" alt="grafico" />
          <div class="itens-cheese">
            <div class="informacoes">
              <div class="circulo mr-2"
              style="background-color:rgb(39,174,180);
              border:rgb(39,174,180); 
              color:rgb(39,174,180);">
                iiiii</div>
              <h5>Contas</h5>
            </div>           
            <div class="informacoes">
              <div class="circulo mr-2" 
              style="background-color:rgb(254,203,126);                     
                     color:rgb(254,203,126); border: solid 0.5px rgb(254,203,126);">
              iiiii</div>
              <h5>10 carros vendidos</h5>
            </div>           
            <div class="informacoes">
              <div class="circulo mr-2" 
               style="background-color:rgb(247,154,106); color:rgb(247,154,106);">
                iiiii</div>
              <h5>Valores à Receber</h5>
            </div>           
            <div class="informacoes">
              <div class="circulo mr-2"
               style="background-color:rgb(218,81,122); color:rgb(218,81,122);">
                iiiii</div>
              <h5>Inadinplentes</h5>
            </div>           
            
          </div>
        </div>
        <div class="grafico">
          <img src="./../assets/grafico.png" width="20%" alt="grafico" />
          <div class="text ml-3">
            <h5>Tivemos um crescimento de 8%</h5>
            <h5>comparado ao mês anterior</h5>
          </div>
          
        </div>
      </div>
      <!-- vision end -->
      <div class="menus">
        <router-link>teste</router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/stock.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/relatorios.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/consultas.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/cotacoes.png" alt="estoque" />
        </router-link>
        <router-link to="/cadastro" class="linkando">
          <img src="./../assets/cadastro.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/nova_venda.png" alt="estoque" />
        </router-link>
      </div>
    </div><!-- container end -->
    

    <Footer class="footer" />
  </div>
</template>
   
 

<script>
import Footer from "./../components/Footer";
import Calendar from "./../components/Calendar";
export default {
  name: "Home",
  components: {
    Footer,
    Calendar
  }
};
</script>
<style lang="scss" scoped>
.home {
  color: white;
  .container {    
    display: flex;
    justify-content: space-evenly;
    align-items: stretch;
    max-height: 100%;
    height: 100%;
    
    .calendar {
      width: 35%;
      border-right: 1px solid #cacaca;
      padding-right: 2%;      
    }
    .vision {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 90%;
      margin-top: -7%;
      
      .cheese{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 100%;        
        height: 40%;
        margin-top: -50%;
        margin-left: -7%; 
        img{
          width: 28%;
          margin-left:-21%;          
        }
        .informacoes{
            display: flex;
            margin-left: 14%;
            margin-bottom:5%;
            max-width: 100%;
            width: 100%;                       
              .circulo{
                display: flex;
                justify-content: space-around;
                background-color: yellowgreen;
                border: solid 1px yellowgreen;
                color: yellowgreen;
                max-width: 100%;
                width: 10%;
                height:100%;
                border-radius: 50%;
                }            
           }/* informacoes end */          
       } /* cheese end */
     } /* vision end */ 

     .grafico{
       display: flex;
       margin-left: -21%;
       justify-content: center;
       align-items: flex-end;
       margin-top: -42%;
     }
           

     
    .menus {
      width: 9%;
      height: 75%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 10%;
      padding: 1%;
      background-color: #707070;
      .linkando {
        img {
          width: 98%;
          margin-top: 21%;
          border-bottom: solid 1px #ffffff;
          padding-bottom: 21%;
        }
      } /* linkando end */
    } /* menus end */
  }

  .footer {
    margin-top: 7%;
  }
} /* home end */
</style>
