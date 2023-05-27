<template>
  <v-card max-width="350px" theme="light">
    <v-img
    :src="`../src/assets/produtos/${image}.jpg`"
    :lazy-src="`../src/assets/produtos/${image}.jpg`"
    class="align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    cover
    height="300px"
    >
      <v-card-title class="text-white">Top Ventilator</v-card-title>
    </v-img>

    <v-card-subtitle class="mt-2">Descrição do ventilador</v-card-subtitle>
  
    <v-card-actions>
      <v-btn size="small" variant="outlined" >Comprar</v-btn>
      <v-spacer></v-spacer>
      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-heart"></v-btn>
      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-bookmark"></v-btn>
      <v-btn size="small" color="surface-variant" variant="text" icon="mdi-share-variant"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default({
    name: 'LojaCardsProdutos',
    props: {
      image: {
        type: [String,Number],
        default: () => ''
      }
    }
  })
</script>