import Vue from 'vue'
import Vuex from 'vuex';
// import carros from './../data/carros'
//import clientes from './../data/cliente'


Vue.use(Vuex)
export default new Vuex.Store({
 
  state: {
    clientes:[],    
    carros:[],
    localFinanceiro: [],
    opcionais:[]   
  },
  
  mutations: {    
    setClientes(state, clientes){
      state.clientes = clientes;
    },

    // addClientes(state, {clienteId, clienteName, clienteFone, clienteCell, clienteEmail, preferencia, pocos, regiao}
    //   ){
    //    state.clientes.push({
    //      clienteId:clienteId, 
    //      clienteName:clienteName, 
    //      clienteFone:clienteFone, 
    //      clienteCell:clienteCell, 
    //      clienteEmail:clienteEmail, 
    //      preferencia:preferencia, 
    //      pocos:pocos, 
    //      regiao:regiao
    //     })
    // },     
    addClientes(state, payload){
      state.clientes = payload
    },

    setCarros(state, carros){       
      state.carros = carros;
    },

    // addCarros(state, {carro, moto, modelo, marca, ano, cilindradas, cor, placa, chassis, loja, consignado}
    //           ){
    //    state.carros.push({carro, moto, modelo, marca, ano, cilindradas, cor, placa, chassis, loja, consignado})
    // },

    addCarros(state, payload){
      state.carros = payload;
    },

    tiraCarro(state, {carro, marca, ano, cor}){
      state.carros.pop({carro, marca, ano, cor})
   },

    setOpcionais(state, opcionais){
      state.opcionais = opcionais;    
    },     
           
    addOpcionais(state, payload ){    
        state.opcionais = payload
     },

     setLocalFinanceiro(state, local){
      state.localFinanceiro = local;    
    }, 
    addLocalFinanceiro(state, payload){
      state.localFinanceiro = payload;
    },

    }, //mutations end        
           
 

  actions: {
    addClientes({ commit }, add ){      
      Vue.prototype.$http.post('data.json', add).then(resp =>{
        var resposta = resp.data 
        if(resposta){
          return Promise.resolve(commit('addClientes', add))          
        }         
      }); 
    },

    initClientes({ commit }){       
       Vue.prototype.$http.get('data.json').then(resp =>{
        var clientes = resp.data      
        commit('setClientes', clientes )
       })
       
    },

    addCarros({ commit }, addc ){
      Vue.prototype.$http.post('/carros', addc).then(resp =>{
        var resposta = resp.data 
        console.log(resposta)     
        commit('addCarros', addc )
      });   
      
    },   
     
    tiraCarro( { commit }, tira ){
      Vue.prototype.$http.delete('/carros', tira).then(resp =>{
        var resposta = resp.data 
        console.log(resposta)
        commit('tiraCarro', tira) 
      });
    },

  initCarros({ commit } ){
    Vue.prototype.$http.get('/carros').then(resp =>{
      var carros = resp.data      
     commit('setCarros', carros 
     )})
  },
    
   initOpcionais({ commit }){      
      Vue.prototype.$http.get('/opcionais').then(resp =>{
        var opcionais = resp.data      
        commit('setOpcionais', opcionais ) 
       })
   },
    addOpcionais({ commit }, add ){      
      Vue.prototype.$http.post('/opcionais', add).then(resp =>{
        var resposta = resp.data 
        console.log(resposta)     
        commit('addOpcionais', add)
      });
    },
     

   initLocalFinanceiro({ commit }){
    Vue.prototype.$http.get('data.json').then(resp =>{
      var localFinanceiro = resp.data      
      commit('setLocalFinanceiro', localFinanceiro )
     })
      
   },

   addLocalFinanceiro({ commit }, add ){
    Vue.prototype.$http.post('data.json', add).then(resp =>{
      var resposta = resp.data 
      console.log(resposta)     
      commit('addLocalFinanceiro', add)
    });
    
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
    },

    localFinanceiro(state){
      return state.localFinanceiro
    },
    opcionais(state){
      return state.opcionais
    } 
    
  },

  modules: {
  }
})
