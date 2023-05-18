<template>
  
  <v-container class="d-flex align-center justify-center mt-8">
    <p class="font-weight-medium text-h5">Destaques</p>
  </v-container>

  <v-container class="d-flex align-center justify-space-evenly mb-8">
    <v-card
      class="my-2"
      max-width="374"
      v-for="n in 3"
      :key="n"
    >
      <v-img
        cover
        height="250"
        src="https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/8363/3660071.jpg"
      ></v-img>
      <v-card-item>
        <v-card-title>Top Ventilator</v-card-title>
        <v-card-subtitle>
          <span class="me-1">Coleção Fan</span>
          <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
          ></v-icon>
        </v-card-subtitle>
      </v-card-item>
      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <v-rating
            :model-value="4.5"
            color="amber"
            density="compact"
            half-increments
            readonly
            size="small"
          ></v-rating>
          <div class="text-grey ms-4">
            4.5 (413)
          </div>
        </v-row>
        <div class="my-4 text-subtitle-1">
          $666 • Basic | Casual | Full
        </div>
        <div>Um ventilador moderno para pessoas modernas.</div>
      </v-card-text>
      <div class="px-4 d-flex justify-center mb-3">
        <v-chip-group v-model="selection">
          <v-chip class="px-8">Ver coleção</v-chip>
        </v-chip-group>
      </div>
    </v-card>
  </v-container>

</template>

<script>
  export default({
    name: 'LojaDestaques',
  })
</script>