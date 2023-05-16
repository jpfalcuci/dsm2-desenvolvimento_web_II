<template>
  <v-container class="w-100 m-0">
    <v-card class="mx-auto rounded-lg" max-width="350">
      <v-img
        class="align-end text-white"
        height="200"
        :src="src"
        cover
      ></v-img>
      <v-card-title class="text-capitalize">{{ title }}</v-card-title>
      <v-card-subtitle>{{ subtitle }}</v-card-subtitle>
      <v-card-actions class="d-flex justify-space-between">
        <v-btn color="teal-darken-3" class="text-capitalize">
          Ligar / Desligar
        </v-btn>
        <v-btn variant="tonal" class="bg-teal-darken-3 text-capitalize">
          Detalhes >
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'CardsProdutos',
    props: {
      src: String,
      title: String,
      subtitle: String
    }
  }
</script>
