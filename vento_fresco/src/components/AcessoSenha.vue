<template>
  <v-text-field
    v-model="password"
    :readonly="loading"
    density="compact"
    clearable
    label="Senha"
    variant="outlined"
    placeholder="Digite sua senha"
    :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required, rules.min]"
    :type="show1 ? 'text' : 'password'"
    counter
    @click:append-inner="show1 = !show1"
  ></v-text-field>
</template>

<script>
  export default {
  name: 'AcessoSenha',
  data: () => ({
    password: null,
    loading: false,
    show1: false,
    rules: {
      required: value => !!value || 'Campo obrigatório.',
      min: v => v.length >= 8 || 'Pelo menos 8 caracteres.',
    }
  }),
}
</script>
