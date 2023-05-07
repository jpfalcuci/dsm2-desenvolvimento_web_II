<template>
  <Acesso :login="true" :botao-acao="'Entrar'" />
</template>

<script>
  import Acesso from '@/components/Acesso.vue';

  export default {
  name: 'Login',
  components: {
    Acesso
  },
}
</script>
