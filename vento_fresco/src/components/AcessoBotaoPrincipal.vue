<template>
  <v-btn
    :disabled="!form"
    :loading="loading"
    :rules="[rules.required]"
    block
    color="teal-darken-3"
    type="submit"
    variant="elevated"
    class="text-capitalize"
    :to="rota"
    
  >
    {{ botaoAcao }}
  </v-btn>
</template>

<script>
  export default {
  name: 'AcessoBotaoPrincipal',
  data: () => ({
    rules: {
      required: value => !!value || 'Campo obrigatório.',
    }
  }),
  props: {
    form: {
      type: Boolean
    },
    rota: {
      type: String,
    },
    botaoAcao: {
      type: String
    },
  },
}
</script>
