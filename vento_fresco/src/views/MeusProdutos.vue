<template>
  <div>
    <v-sheet>
      <v-row class="bg-grey-lighten-5 justify-space-evenly ">
        <v-col v-for="(card, index) in cards" :key="index" cols="4">
          <SysCardsProdutos :src="getImage(index)" :title="card.title" :subtitle="card.subtitle" />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import SysCardsProdutos from '@/components/SysCardsProdutos.vue';

let titulo = 'Top Ventilator';
let subtitulo = 'Um ventilador moderno';
let baseImagem = 'src/assets/produtos/';
let imagemInicial = 1;

export default {
  name: 'MeusProdutos',
  components: {
    SysCardsProdutos
  },
  data() {
    return {
      cards: [
        { title: titulo, subtitle: subtitulo },
        { title: titulo, subtitle: subtitulo },
        { title: titulo, subtitle: subtitulo },
        { title: titulo, subtitle: subtitulo },
        { title: titulo, subtitle: subtitulo },
        { title: titulo, subtitle: subtitulo }
      ]
    };
  },
  methods: {
    getImage(index) {
      const imageIndex = (index + imagemInicial) * 2;
      return baseImagem + imageIndex + '.jpg';
    }
  }
};
</script>
