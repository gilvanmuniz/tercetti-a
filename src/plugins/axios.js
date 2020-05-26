import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            // baseURL: 'https://manager-car-45dd9.firebaseio.com/'
            baseURL: 'http://localhost:8081/'
        })
    }
})