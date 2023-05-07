<template>
  <Acesso :esqueceu="true" :botao-acao="'Resetar senha'" />
</template>

<script>
  import Acesso from '@/components/Acesso.vue';

  export default {
  name: 'ResetSenha',
  components: {
    Acesso
  },
}
</script>
