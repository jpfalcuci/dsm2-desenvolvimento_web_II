<template>
  <v-card width="250px" theme="light">
    <v-img
    src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/8363/3660071.jpg"
    class="align-end"
    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    cover
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
    name: 'LojaCardsProdutos'
  })
</script>