<template>
    <div>
      <v-sheet>
        <v-row class="bg-grey-lighten-5 justify-space-evenly ">
          <v-col v-for="(card, index) in cards" :key="index" cols="4">
            <SysCardsProdutos :src="card.src" :title="card.title" :subtitle="card.subtitle" />
          </v-col>
        </v-row>
      </v-sheet>
    </div>
</template>

<script>
  import SysCardsProdutos from '@/components/SysCardsProdutos.vue';

  let titulo = 'Top Ventilator';
  let subitutlo = 'Um ventilador moderno';
  let imagem = 'https://d1o6h00a1h5k7q.cloudfront.net/imagens/img_m/8363/3660071.jpg'

  export default {
      name: 'MeusProdutos',
      components: {
        SysCardsProdutos
      },
      data() {
      return {
        cards: [
          { title:titulo, subtitle:subitutlo, src:imagem },
          { title:titulo, subtitle:subitutlo, src:imagem },
          { title:titulo, subtitle:subitutlo, src:imagem },
          { title:titulo, subtitle:subitutlo, src:imagem },
          { title:titulo, subtitle:subitutlo, src:imagem },
          { title:titulo, subtitle:subitutlo, src:imagem }          
        ]
      }
    }
  }
</script>
