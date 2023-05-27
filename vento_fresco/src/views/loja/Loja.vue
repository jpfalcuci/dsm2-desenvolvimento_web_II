<template>

  <LojaMenuSup />
  <LojaCarousel />
  <LojaDestaques />
  <LojaProdutos />
  <LojaSaibaMais />
  <LojaRodape />  

</template>

<script>
import LojaMenuSup from '@/components/loja/LojaMenuSup.vue';
import LojaCarousel from '@/components/loja/LojaCarousel.vue';
import LojaDestaques from '@/components/loja/LojaDestaques.vue';
import LojaProdutos from '@/components/loja/LojaProdutos.vue';
import LojaSaibaMais from '@/components/loja/LojaSaibaMais.vue';
import LojaRodape from '@/components/loja/LojaRodape.vue';

export default {
  name: 'Loja',
  components: {
    LojaMenuSup,
    LojaCarousel,
    LojaDestaques,
    LojaProdutos,
    LojaSaibaMais,
    LojaRodape
  },
}
</script>
