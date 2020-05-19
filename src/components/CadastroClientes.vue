<template>
  <div class="cadastro-clientes">
      <div class="formulario ml-4">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-1"
          label="CLIENTE:"
          label-for="input-1"
          description="Aqui só o nome básico do carro"
        >
          <b-form-input
            id="input-1"
            v-model="form.nome"
            type="text"
            required
            placeholder="Nome do Cliente"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="FONE:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.fone" required placeholder="Fone aqui"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="CELULAR:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.cell" required placeholder="WhatsApp aqui"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="EMAIL:" label-for="input-2">
          <b-form-input id="input-2" type="email" v-model="form.email" required placeholder="email aqui"></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="PREFÊNCIA DE CARRO:" label-for="input-2">
          <b-form-input id="input-2" v-model="form.prefer" required placeholder="Uma carro que gosta"></b-form-input>
        </b-form-group>
        
        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="me">Poços</b-form-checkbox>
            <b-form-checkbox value="that">Região</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <b-button type="submit"  variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result"> -->
        <!-- <pre class="m-0">{{ form }}</pre> -->
      <!-- </b-card> -->
    </div>
    <!-- formulario end -->
  </div>
</template>

<script>
export default {
 data(){
     return {
      form: {
        nome: "",
        fone: "",
        cell: "",
        email: "",
        prefer: ""
      },
     
      show: true,
  }
 },
 computed: {
    clientes() {
      return this.$store.getters.clientes;
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form))
      this.addClientes()
      alert("Pronto para acrescentar " + this.form.car);     
      
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.nome = "";
      this.form.fone = "";
      this.form.cell = "";
      this.form.email = "";
      this.form.prefer = "";
      
      // Trick to reset/clear native browser form validation state
      // this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }, // onReset end
  

     addClientes() {
       const add = {
         clienteId: 2, 
         clienteName:this.form.nome, 
         clienteFone:this.form.fone,
         preferencia:this.form.prefer
       }
       this.$store.dispatch('addClientes', add)
       console.log("TESTE")
     }
  },
}
</script>

<style lang="scss" scoped>
// .cadastro-clientes{

// }

</style>