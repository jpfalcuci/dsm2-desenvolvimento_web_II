<template>
  <v-container class="bg-grey-lighten-4 mx-0 px-0 py-8 h-100" fluid>
    <v-card class="mx-auto mt-10 px-6 py-6" max-width="344">

      <AcessoLogo />

      <div class="d-flex flex-column">
        <p class="mx-auto pb-5" justify="center">Crie sua conta</p>
      </div>

      <v-form v-model="form" @submit.prevent="onSubmit">

        <AcessoNome />

        <AcessoEmail />

        <AcessoSenha />

        <div class="d-flex flex-column">
          <p class="mx-auto py-2 mb-5 text-grey-darken-1" justify="center">Continuando, você concorda com nossos <a href="#" class="text-teal-darken-3 text-decoration-none">termos de serviço</a>.</p>
        </div>

        <AcessoBotaoPrincipal :rota="'meusprodutos'" :botao-acao="'Cadastrar'" :form="form"/>

        <AcessoBotaoGoogle :botao-acao="'Cadastrar'" />
      </v-form>
  
      <div class="d-flex flex-column pt-3">
        <p class="mx-auto py-2 text-grey-darken-1" justify="center">Já tem uma conta? <a href="login" class="text-teal-darken-3 text-decoration-none">Entrar</a></p>
      </div>
      
    </v-card>
  </v-container>
</template>

<script>
  import AcessoLogo from '@/components/AcessoLogo.vue';
  import AcessoNome from '@/components/AcessoNome.vue';
  import AcessoEmail from '@/components/AcessoEmail.vue';
  import AcessoSenha from '@/components/AcessoSenha.vue';
  import AcessoBotaoPrincipal from '@/components/AcessoBotaoPrincipal.vue';
  import AcessoBotaoGoogle from '@/components/AcessoBotaoGoogle.vue';

  export default {
  name: 'AcessoCadastro',
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
    AcessoNome,
    AcessoEmail,
    AcessoSenha,
    AcessoBotaoPrincipal,
    AcessoBotaoGoogle
  },
}
</script>
