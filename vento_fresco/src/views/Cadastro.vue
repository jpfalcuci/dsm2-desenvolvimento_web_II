<template>
  <Acesso :cadastro="true" :botao-acao="'Cadastrar'" />
</template>

<script>
  import Acesso from '@/components/Acesso.vue';

  export default {
  name: 'Cadastro',
  components: {
    Acesso
  },
}
</script>
