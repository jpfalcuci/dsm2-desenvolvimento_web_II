<!-- eslint-disable vue/valid-v-for -->
<template>
  <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->

  <v-container fluid class="ma-0 pa-0 w-100">
    <v-app-bar theme="dark">
      <v-container class="d-flex align-center justify-space-between">
        <div class="d-flex text-h5 align-center">
          <p class="font-weight-black">Vento</p>
          <p class="font-weight-regular">Fresco</p>
        </div>
        <div class="d-flex align-center justify-space-evenly">
          <v-btn class="text-capitalize mx-3">Home</v-btn>
          <v-btn class="text-capitalize mx-3">Serviços</v-btn>
          <v-btn class="text-capitalize mx-3">Produtos</v-btn>
          <v-btn class="text-capitalize mx-3">Sobre</v-btn>
        </div>
        <v-btn to="/login" append-icon="mdi-login" class="text-capitalize">Login</v-btn>
      </v-container>
    </v-app-bar>
  </v-container>

  <v-carousel hide-delimiters cycle :show-arrows="false">
    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg"
      cover
    ></v-carousel-item>

    <v-carousel-item
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-carousel-item>
  </v-carousel>

  <v-container class="d-flex align-center justify-center mt-8">
    <p class="font-weight-medium text-h5">Destaques</p>
  </v-container>

  <v-container class="d-flex align-center justify-space-between mb-8">
    <v-card
      class="my-2"
      max-width="374"
      v-for="n in 3"
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


  <v-container class="d-flex align-center justify-space-between bg-grey-darken-4" fluid>
    <v-container>
      <v-row>
        <template v-for="(image,imgIdx) in imageLayout" :key="imgIdx">
          <v-col :cols="image.cols">
            <v-img
              :src="`https://picsum.photos/1000/600?image=${image.cols * 20}`"
              cover
              height="100%"
            ></v-img>
          </v-col>
          <v-col v-if="image.children" cols="6" class="d-flex flex-column">
            <v-row>
              <v-col v-for="(children,childIdx) in image.children" :key="childIdx" :cols="children.cols">
                <v-img
                  :src="`https://picsum.photos/1000/600?image=${children.cols + childIdx}`"
                  cover
                  height="100%"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    imageLayout: [
      { cols: 4 },
      {
        cols: 8,
        children: [{ cols: 12 }, { cols: 12 }],
      },
      { cols: 6 },
      { cols: 3 },
      { cols: 9 },
      { cols: 4 },
      { cols: 8 },
    ],
  }),
}
</script>