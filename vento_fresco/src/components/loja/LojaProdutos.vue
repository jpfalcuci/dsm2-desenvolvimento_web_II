<template>
  <v-container class="ma-0 pa-0" fluid>
    <v-sheet class="pt-8" theme="dark">
      <v-container class="d-flex align-center justify-center mb-5">
        <p class="font-weight-medium text-h5">Produtos</p>
      </v-container>

      <v-container max-width="900px">
        <v-row class="d-flex justify-space-around mb-10">
          <v-col
            class="d-flex justify-space-evenly"
            v-for="n in 12"
            :key="n"
            cols="3"
          >
            <LojaCardsProdutos :image="n" />
          </v-col>
        </v-row>

        <v-container class="d-flex align-center justify-center mb-5 mt-0 pt-0">
          <v-btn variant="outlined">Ver mais</v-btn>
        </v-container>
      </v-container>
    </v-sheet>
  </v-container>
</template>


<script>
  import LojaCardsProdutos from '@/components/loja/LojaCardsProdutos.vue';

  export default({
    name: 'LojaProdutos',
    components: {
      LojaCardsProdutos
    }
  })
</script>