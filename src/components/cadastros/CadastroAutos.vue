<template>
  <div class="cadastro-autos ml-4">
    <div class="formulario ml-4">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-4">
          <b-form-checkbox-group class="text-left ml-3" v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me"><h5>Carro</h5></b-form-checkbox>
            <b-form-checkbox value="that"><h5>Moto</h5></b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <!-- @submit="onSubmit" @reset="onReset" -->
        <b-form-input
          id="input-1"
          v-model="form.car"
          type="text"
          required
          placeholder="Modelo"
          class="mb-2"
        ></b-form-input>

        <b-form-input class="mb-2" id="input-2" v-model="form.marca" required placeholder="Marca"></b-form-input>

        <b-form-input
          class="mb-2"
          id="input-2"
          v-model="form.ano"
          required
          placeholder="Ano do Carro"
        ></b-form-input>

        <b-form-input
          class="mb-2"
          id="input-2"
          v-model="form.ano"
          required
          placeholder="Cilindradas"
        ></b-form-input>

        <b-form-input
          class="mb-2"
          id="input-2"
          v-model="form.ano"
          required
          placeholder="Cor"
        ></b-form-input>

        <hr />

       <b-form-input
          class="mb-2"
          id="input-2"
          v-model="form.ano"
          required
          placeholder="Placa"
        ></b-form-input>

       <b-form-input
          class="mb-4"
          id="input-2"
          v-model="form.ano"
          required
          placeholder="Chassis"
        ></b-form-input>

        <b-form-group class="text-left ml-3" id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Loja</b-form-checkbox>
            <b-form-checkbox value="that">Consignado</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button class="mr-2 mt-4" type="submit" variant="primary">Submit</b-button>
        <b-button class="mt-4" type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result"> -->
      <!-- <pre class="m-0">{{ form }}</pre> -->
      <!-- </b-card> -->
    </div>
    <!-- formulario end -->
    <!-- <b-button class="ml-5" type="button" @click="saveCarros" >Salvar</b-button> -->
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
    <!-- <div class="clientList" v-if="clienteFound">
      <h3 class="text-center">Clientes buscando: {{form.car}}</h3>
      <ul>
        <li
          class="mr-7"
          v-for="(cliente, i) in clientList "
          :key="i" 
        >{{ cliente + ' ' + clientesFone[i] }}</li> 
      </ul>
    </div> clientList end-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        car: "",
        marca: "",
        color: null,
        ano: "",
        checked: []
      },
      colors: [
        { text: "Select One", value: null },
        "Branco",
        "Preto",
        "Prata",
        "Vermelho",
        "Marinho"
      ],
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
      this.buscaClientes(this.form.car);
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.car = "";
      this.form.marca = "";
      this.form.ano = null;
      this.form.color = [];
      this.clienteFound = null;
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }, // onReset end

    addCarros() {
      const addc = {
        carro: this.form.car,
        marca: this.form.marca,
        ano: this.form.ano,
        cor: this.form.color
      };
      this.$store.dispatch("addCarros", addc);
      console.log("TESTE");
    },

    tiraCarro() {
      const tira = {
        carro: this.carro,
        marca: this.marca,
        ano: this.ano,
        cor: this.color
      };
      this.$store.dispatch("tiraCarro", tira, this.i);
    },

    saveCarros() {
      // const addc  = this.$store.getters.carros;
      // this.$http.put('data.json', addc)
      this.$http.get("data.json").then(resp => {
        const carros = resp.data;
        console.log(carros);
      });
    },

    buscaClientes(car) {
      this.clientList = [];
      this.clientesFone = [];
      this.clientes.forEach(element => {
        for (var [key, value] of Object.entries(element)) {
          if (value == car) {
            console.log(key + " " + value);
            for (var [key1, value1] of Object.entries(element)) {
              if (key1 == "clienteName") {
                console.log(key1 + " " + value1);
                this.clientList.push(value1);
                this.clienteFound = true;
              }
              if (key1 == "clienteFone") {
                this.clientesFone.push(value1);
                console.log(key1);
              }
            }
          } /* if end */
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cadastro-autos {
  max-width: 99%;
  max-height: 99%;
  height: 100%;
  // width: 70%;
  display: flex;
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

