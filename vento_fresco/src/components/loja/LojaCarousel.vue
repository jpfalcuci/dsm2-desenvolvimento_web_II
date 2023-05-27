<template>
  <v-carousel hide-delimiters cycle :show-arrows="false" height="550px">

    <v-carousel-item
      v-for="n in 4"
      :key="n"
      :src="`src/assets/carousel/0${n}.jpg`"
      cover
    ></v-carousel-item>

  </v-carousel>
</template>

<script>
  export default({
    name: 'LojaCarousel',
  })
</script>
