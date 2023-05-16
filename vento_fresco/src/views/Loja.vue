<!-- eslint-disable vue/valid-v-for -->
<template>

  <MenuSup />
  <Carousel />
  <Destaques />
  <Gallery />

</template>

<script>
import MenuSup from '@/components/MenuSup.vue';
import Carousel from '@/components/Carousel.vue';
import Destaques from '@/components/Destaques.vue';
import Gallery from '@/components/Gallery.vue';

export default {
  name: 'MeusProdutos',
  components: {
    MenuSup,
    Carousel,
    Destaques,
    Gallery
  },
}
</script>
