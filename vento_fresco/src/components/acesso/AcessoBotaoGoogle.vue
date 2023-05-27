<template>
  <div class="d-flex flex-column">
    <p class="mx-auto py-2 text-grey-darken-1" justify="center">ou</p>
  </div>

  <v-btn
    block
    color="teal-darken-3"
    type="submit"
    variant="outlined"
    prepend-icon="mdi-google"
    to="/sistema/meusprodutos"
    class="text-capitalize"
  >
    {{ botaoAcao }} com Google
  </v-btn>
</template>

<script>
  export default {
  name: 'AcessoBotaoGoogle',
  props: {
    botaoAcao: {
      type: String
    },
  },
}
</script>
