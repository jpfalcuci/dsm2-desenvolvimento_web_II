<template>
  <v-container class="bg-grey-lighten-4 mx-0 px-0 py-8 h-100" fluid>
    <v-card class="mx-auto mt-10 px-6 py-6" max-width="344">

      <AcessoLogo />

      <div class="d-flex flex-column">
        <p class="mx-auto pb-5 text-grey-darken-1" justify="center">Informe o email cadastrado e enviaremos um link de reset da senha.</p>
      </div>

      <v-form v-model="form" @submit.prevent="onSubmit">

        <AcessoEmail />

        <AcessoBotaoPrincipal :rota="'login'" :botao-acao="'Resetar senha'" :form="form"/>

      </v-form>

    </v-card>
  </v-container>
</template>

<script>
  import AcessoLogo from '@/components/acesso/AcessoLogo.vue';
  import AcessoEmail from '@/components/acesso/AcessoEmail.vue';
  import AcessoBotaoPrincipal from '@/components/acesso/AcessoBotaoPrincipal.vue';

  export default {
  name: 'AcessoSenha',
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
    AcessoBotaoPrincipal,
  },
}
</script>
