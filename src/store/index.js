import Vue from 'vue'
import Vuex from 'vuex';
// import carros from './../data/carros'
import clientes from './../data/cliente'


Vue.use(Vuex) 

export default new Vuex.Store({
 
  state: {
    clientes:[],    
    carros:[],    
  },
  
  mutations: {    
    setClientes(state, clientes){
      state.clientes = clientes;
    },

    addClientes(state, {clienteId, clienteName, clienteFone, preferencia}){
       state.clientes.push({clienteId, clienteName, clienteFone, preferencia})
    },
    
    setCarros(state, carros){       
      state.carros = carros;
    },

    addCarros(state, {carro, marca, ano, cor}){
       state.carros.push({carro, marca, ano, cor})
    },

    tiraCarro(state, {carro, marca, ano, cor}){
        state.carros.pop({carro, marca, ano, cor})
    }
  },

  actions: {
    addClientes({ commit }, add ){
      commit('addClientes', add)
    },

    initClientes({ commit }){
       commit('setClientes', clientes )
    },

    addCarros({ commit }, add ){
      Vue.prototype.$http.post('data.json', add).then(resp =>{
        var resposta = resp.data 
        console.log(resposta)     
        commit('addCarros', add )
      });   
      
    },   
     
    tiraCarro( { commit }, tira ){
      Vue.prototype.$http.delete('data.json', tira).then(resp =>{
        var resposta = resp.data 
        console.log(resposta)
        commit('tiraCarro', tira) 
      });
    },

    initCarros({ commit } ){
      Vue.prototype.$http.get('data.json').then(resp =>{
        var carros = resp.data      
       commit('setCarros', carros 
       )})
    },

    // loadData({ commit }) {
    //   Vue.prototype.$http('data.json').then(resp => {
    //       const data = resp.data
    //       if(data) {
    //           commit('setClientes', data.stocks)
    //           commit('setCarros', {
    //               funds: data.funds,
    //               stockPortfolio: data.stockPortfolio
    //           })
    //       }
    //   })
    // }

  },
  getters: {
    clientes(state) {
        return state.clientes
    },
    carros(state) {
      return state.carros
    }
  },

  modules: {
  }
})
