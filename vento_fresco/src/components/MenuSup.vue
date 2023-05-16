<template>
  <v-container fluid class="ma-0 pa-0 w-100">
    <v-app-bar theme="dark">
      <v-container class="d-flex align-center justify-space-evenly">
        <div class="d-flex text-h5 align-center">
          <p class="font-weight-black">Vento</p>
          <p class="font-weight-regular">Fresco</p>
        </div>
        <div class="d-flex align-center justify-space-evenly">
          <v-btn class="text-capitalize mx-3" variant="plain">Home</v-btn>
          <v-btn class="text-capitalize mx-3" variant="plain">Serviços</v-btn>
          <v-btn class="text-capitalize mx-3" variant="plain">Produtos</v-btn>
          <v-btn class="text-capitalize mx-3" variant="plain">Sobre</v-btn>
        </div>
        <v-btn to="login" append-icon="mdi-login" class="text-capitalize" variant="plain">Login</v-btn>
      </v-container>
    </v-app-bar>
  </v-container>
</template>

<script>
  export default({
    name: 'MenuSup',
  })
</script>