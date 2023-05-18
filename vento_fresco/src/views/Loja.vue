<template>

  <LojaMenuSup />
  <LojaCarousel />
  <LojaDestaques />
  <LojaProdutos />
  <LojaSaibaMais />
  <LojaRodape />  

</template>

<script>
import LojaMenuSup from '@/components/LojaMenuSup.vue';
import LojaCarousel from '@/components/LojaCarousel.vue';
import LojaDestaques from '@/components/LojaDestaques.vue';
import LojaProdutos from '@/components/LojaProdutos.vue';
import LojaSaibaMais from '@/components/LojaSaibaMais.vue';
import LojaRodape from '@/components/LojaRodape.vue';

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
