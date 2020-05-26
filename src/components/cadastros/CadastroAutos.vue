<template>
  <div class="cadastro-autos ml-4">
    <div class="formulario ml-4">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group >
          <b-form-radio-group class="text-left ml-3" id="checkboxes-4">
            <b-form-radio value="true" v-model="form.carro" ><h5>Carro</h5></b-form-radio>
            <b-form-radio value="true" v-model="form.moto" ><h5>Moto</h5></b-form-radio>
          </b-form-radio-group>
        </b-form-group>

        <!-- @submit="onSubmit" @reset="onReset" -->
        <b-form-input          
          v-model="form.modelo"
          type="text"
          required
          placeholder="Modelo"
          class="mb-2"
        ></b-form-input>

        <b-form-input class="mb-2"  
        v-model="form.marca" 
        required 
        placeholder="Marca">
        </b-form-input>

        <b-form-input
          class="mb-2"          
          v-model="form.ano"
          required
          placeholder="Ano do Carro"
        ></b-form-input>

        <b-form-input
          class="mb-2"          
          v-model="form.cilindradas"
          required
          placeholder="Cilindradas"
        ></b-form-input>

        <b-form-input
          class="mb-2"          
          v-model="form.cor"
          required
          placeholder="Cor"
        ></b-form-input>

        <hr />

       <b-form-input
          class="mb-2"         
          v-model="form.placa"
          required
          placeholder="Placa"
        ></b-form-input>

       <b-form-input
          class="mb-4"          
          v-model="form.chassis"
          required
          placeholder="Chassis"
        ></b-form-input>

        <b-form-group class="text-left ml-3" >
          <!-- <b-form-radio-group >
            <b-form-radio value="true" v-model="form.loja">Loja</b-form-radio>
            <b-form-radio value="true" v-model="form.consignado">Consignado</b-form-radio>
          </b-form-radio-group> -->
        </b-form-group>
          <b-button class="mr-2 mt-4"  type="submit" variant="primary">Submit</b-button>
          <b-button class="mt-4" type="reset" variant="danger">Reset</b-button>
        </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result"> -->
      <!-- <pre class="m-0">{{ form }}</pre> -->
      <!-- </b-card> -->
    </div>
    <!-- formulario end -->
    <!-- <b-button class="ml-5" type="button" @click="listCarros" >Salvar</b-button> -->
    <!-- <div class="listcar">
      <h3>Carros:</h3>
      <ul v-for="(car, i) in carros " :key="i">
        <div class="texto">
          <li>{{ car.marca + ' '+ car.carro }}             
            
          </li>
        </div>
        <b-button @click="tiraCarro" class>Delete</b-button>
      </ul>
    </div> < listcar end-->
    <div class="clientList" v-if="clienteFound">
      <h3 class="text-center">Clientes buscando: {{form.modelo}}</h3>
      <ul>
        <li
          class="mr-7"
          v-for="(cliente, i) in clientList "
          :key="i" 
        >{{ cliente + ' ' + clientesFone[i] }}</li> 
      </ul>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        carro:false,
        moto: false,
        modelo: "",
        marca: "",
        ano: "",
        cilindradas: "",
        cor: "",
        placa: "",
        chassis: "",
        // loja:false,
        // consignado:false,        
      },
      
      show: true,

      clientList: [],

      clientesFone: [],
      clienteFound: false
    };
  },
  computed: {
    carros() {
      return this.$store.getters.carros;
    },
    clientes() {
      return this.$store.getters.clientes;
    }
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form))
      alert("Pronto para acrescentar " + this.form.car);
      this.addCarros();
      this.buscaClientes(this.form.modelo);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.modelo = "";
      this.form.marca = "";
      this.form.ano = null;
      this.form.cilindradas = "";
      this.form.cor = [];
      this.form.placa = "";
      this.form.chassis = "";      
      this.clienteFound = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
      this.show = true;
      });
    }, // onReset end

    addCarros() {
      const addc = {
        ano: this.form.ano,
        carro:this.form.carro,        
        chassis: this.form.chassis,
        cilindradas: this.form.cilindradas,
        // consignado: this.form.consignado,
        cor: this.form.cor,
        // loja: this.form.loja,
        moto:this.form.moto,
        modelo: this.form.modelo,
        marca: this.form.marca,
        placa: this.form.placa,
      };
      this.$store.dispatch("addCarros", addc);
      //console.log(addc.modelo);
    },

    tiraCarro() {
      const tira = {
        modelo: this.form.modelo,
        marca: this.form.marca,
        ano: this.form.ano,
        cor: this.form.cor,
        placa: this.form.placa,
        chassis: this.form.chassis,
        loja: this.form.loja,
      };
      this.$store.dispatch("tiraCarro", tira, this.i);
    },

    listCarros() {
      // const addc  = this.$store.getters.carros;
      // this.$http.put('data.json', addc)
      this.$http.get("data.json").then(resp => {
        const carros = resp.data;
        console.log(carros);
      });
    },

    // buscaClientes(car) {
    //   this.clientList = [];
    //   this.clientesFone = [];
    //   this.clientes.forEach(element => {
    //     for (var [key, value] of Object.entries(element)) {
    //       if (value == car) {
    //         console.log(key + " " + value);
    //         for (var [key1, value1] of Object.entries(element)) {
    //           if (key1 == "clienteName") {
    //             console.log(key1 + " " + value1);
    //             this.clientList.push(value1);
    //             this.clienteFound = true;
    //           }
    //           if (key1 == "clienteFone") {
    //             this.clientesFone.push(value1);
    //             console.log(key1);
    //           }
    //         }
    //       } /* if end */
    //     }
    //   });
    // }

    buscaClientes(car){
      for (var [key, value] of Object.entries(this.clientes)) {      
             key
         for (var [key1, value1] of Object.entries(value)){
             key1 //console.log(car)          
           if(value1.key1 == car){             
             for (var [key2, value2] of Object.entries(value1)){
                key2
                console.log(value2.key2)
             }
               
           }
         }
      }
    }

  }  /* methosds end */
};
</script>

<style lang="scss" scoped>
.cadastro-autos {
  max-width: 99%;
  max-height: 99%;
  height: 100%;
  // width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  //background-color: rgb(155, 155, 154);  

  .formulario {
    color: white;
    width: 80%;    
    input{
      margin-left:3%;
    }
       
  } /* formulario end */
  .listcar {
    width: 90%;
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      // align-items: flex-start;
      .texto {
        display: flex;

        li {
          display: flex;
          flex-direction: column;
          color: white;
          font-size: 28px;
        }
      }

      button {
        align-items: right;
        float: right;
        // background-color: yellow;
      }
    }
  } /* listcar end */

  .clientList {
    width: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border: solid 1px white;
    border-radius: 7%;
    padding: 2%;
    h3 {
      color: white;
      text-shadow: 1px 1px red;
    }
    ul {
      list-style: none;

      li {
        color: black;
        font-size: 28px;
        margin-left: -14%;
        background-color: white;
        border-radius: 7px;
        margin: 6x;
      }
    }
  }
} /* cadastro-auto end */
</style> 

