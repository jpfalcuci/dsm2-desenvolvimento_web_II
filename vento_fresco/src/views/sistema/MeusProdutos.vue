<template>
  <div>
    <v-sheet>
      <v-row class="bg-grey-lighten-5 justify-space-evenly">
        <v-col v-for="n in 6" :key="n" cols="4">
          <SysCardsProdutos :num="getNum(n)" title="Top Ventilator" subtitle="Um ventilador moderno" />
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script>
import SysCardsProdutos from '@/components/sistema/SysCardsProdutos.vue';

export default {
  name: 'MeusProdutos',
  components: {
    SysCardsProdutos
  },
  data() {
    return {
      imagemInicial: 0
    };
  },
  methods: {
    getNum(index) {
      return (index + this.imagemInicial) * 2;
    }
  }
};
</script>