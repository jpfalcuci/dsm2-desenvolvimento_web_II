<template>
  <v-text-field
    v-model="name"
    :readonly="loading"
    :rules="[rules.required]"
    density="compact"
    class="mb-2"
    clearable
    label="Nome"
    variant="outlined"
    placeholder="Digite seu nome"
  ></v-text-field>
</template>

<script>
  export default {
  name: 'AcessoNome',
  data: () => ({
    name: null,
    loading: false,
    rules: {
      required: value => !!value || 'Campo obrigatório.',
    }
  }),
}
</script>
