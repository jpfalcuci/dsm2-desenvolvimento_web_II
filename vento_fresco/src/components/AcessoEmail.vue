<template>
  <v-text-field
    v-model="email"
    :readonly="loading"
    :rules="[rules.required]"
    density="compact"
    class="mb-2"
    clearable
    label="Email"
    variant="outlined"
    placeholder="Digite seu email"
    ></v-text-field>
</template>

<script>
  export default {
  name: 'AcessoEmail',
  data: () => ({
    email: null,
    loading: false,
    rules: {
      required: value => !!value || 'Campo obrigatório.'
    }
  }),
}
</script>
