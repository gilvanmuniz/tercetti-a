<template>
  <div class="menus">       
        <router-link to="/" class="linkando">
          <img src="./../assets/stock.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/relatorios.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/consultas.png" alt="estoque" />
        </router-link>
        <router-link to="/clientes" class="linkando">
          <img src="./../assets/cotacoes.png" alt="estoque" />
        </router-link>
        <router-link to="/cadastro" class="linkando">
          <img src="./../assets/cadastro.png" alt="estoque" />
        </router-link>
        <router-link to="/" class="linkando">
          <img src="./../assets/nova_venda.png" alt="estoque" />
        </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .menus {
      width: 14%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 6%;
      padding: 1%;
      background-color: #707070;
      border-radius: 7%;
      .linkando {
        img {
          width: 98%;
          margin-top: 21%;
          border-bottom: solid 1px #ffffff;
          padding-bottom: 21%;
        }
      } /* linkando end */
    } /* menus end */
  
</style>>

