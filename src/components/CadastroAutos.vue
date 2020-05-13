<template>
  <div class="formulario">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Novo Carro:"
        label-for="input-1"
        description="Aqui só o nome básico do carro"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Nome do Carro"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Marca:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Ano:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Cor:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.color"
          :options="colors"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
          <b-form-checkbox value="me">Loja</b-form-checkbox>
          <b-form-checkbox value="that">Consignado</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <!-- <pre class="m-0">{{ form }}</pre> -->
    </b-card>
  </div>
</template>

<script>
export default {
   data() {
      return {
        form: {
          email: '',
          name: '',
          color: null,
          checked: []
        },
        colors: [{ text: 'Select One', value: null }, 'Branco', 'Preto', 'Prata', 'Vermelho', 'Marinho'],
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style lang="scss" scoped>
.formulario{
  color: white;
  width: 100%;
}
</style> 

