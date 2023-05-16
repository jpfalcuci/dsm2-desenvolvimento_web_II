<template>
  <v-container class="bg-grey-lighten-4 mx-0 px-0 py-8 h-100" fluid>
    <v-card class="mx-auto mt-10 px-6 py-6" max-width="344">

      <AcessoLogo />

      <v-form v-model="form" @submit.prevent="onSubmit">
        <AcessoEmail />

        <AcessoSenha />

        <div class="d-flex flex-column">
          <v-checkbox label="Manter conectado" color="teal-darken-3" class="pa-0 ma-0" density="compact"></v-checkbox>
        </div>

        <AcessoBotaoPrincipal :rota="'meusprodutos'" :botao-acao="'Entrar'" :form="form"/>

        <AcessoBotaoGoogle :botao-acao="'Entrar'" />
      </v-form>
  
      <div class="d-flex flex-column pt-3">
        <p class="mx-auto py-2 text-grey-darken-1" justify="center"><a href="cadastro" class="text-grey-darken-1 text-decoration-none">Criar conta</a></p>
        <p class="mx-auto py-2 text-grey-darken-1" justify="center"><a href="resetsenha" class="text-teal-darken-3 text-decoration-none">Esqueceu sua senha?</a></p>
      </div>
      
    </v-card>
  </v-container>
</template>

<script>
  import AcessoLogo from '@/components/AcessoLogo.vue';
  import AcessoEmail from '@/components/AcessoEmail.vue';
  import AcessoSenha from '@/components/AcessoSenha.vue';
  import AcessoBotaoPrincipal from '@/components/AcessoBotaoPrincipal.vue';
  import AcessoBotaoGoogle from '@/components/AcessoBotaoGoogle.vue';

  export default {
  name: 'AcessoLogin',
  data: () => ({
    form: false,
  }),
  methods: {
    onSubmit () {
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
  components: {
    AcessoLogo,
    AcessoEmail,
    AcessoSenha,
    AcessoBotaoPrincipal,
    AcessoBotaoGoogle
  },
}
</script>
