<template>
  <v-container class="bg-grey-lighten-5 ma-0 px-0 py-8 w-100 h-100">
    <v-card class="mx-auto px-6 py-6" max-width="344">

      <div class="d-flex flex-column">
        <h1 class="text-teal-darken-3 my-0 pa-0 mx-auto" justify="center"><b>Vento</b>Fresco</h1>
      </div>

      <div class="d-flex flex-column" :class="{ 'd-none': cadastro || esqueceu}">
        <span class="mx-auto pb-5" :class="{ 'd-none': cadastro || esqueceu}" justify="center"></span>
      </div>
      
      <div class="d-flex flex-column" :class="{ 'd-none': login || esqueceu}">
        <p class="mx-auto pb-5" :class="{ 'd-none': login || esqueceu}" justify="center">Crie sua conta</p>
      </div>
      
      <div class="d-flex flex-column" :class="{ 'd-none': login || cadastro}">
        <p class="mx-auto pb-5" :class="{ 'd-none': login || cadastro}" justify="center">Esqueceu sua senha?</p>
      </div>
      
      <div class="d-flex flex-column" :class="{ 'd-none': login || cadastro}">
        <p class="mx-auto pb-5 text-grey-darken-1" :class="{ 'd-none': login || cadastro}" justify="center">Informe o email cadastrado e enviaremos um link de reset da senha.</p>
      </div>

      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="name"
          :readonly="loading"
          :rules="esqueceu || login ? false : [rules.required]"
          density="compact"
          class="mb-2"
          :class="{ 'd-none': login || esqueceu }"
          clearable
          label="Nome"
          variant="outlined"
          placeholder="Digite seu nome"
        ></v-text-field>

        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[rules.required]"
          density="compact"
          class="mb-2"
          clearable
          label="Email"
          variant="outlined"
          placeholder="Digite seu email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          :readonly="loading"
          density="compact"
          clearable
          label="Senha"
          variant="outlined"
          placeholder="Digite sua senha"
          :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="esqueceu ? false : [rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          counter
          @click:append-inner="show1 = !show1"
          :class="{ 'd-none': esqueceu }"
        ></v-text-field>

        <div class="d-flex flex-column py-0">
          <v-checkbox label="Manter conectado" color="teal-darken-3" class="pa-0 ma-0" :class="{ 'd-none': esqueceu || cadastro }" density="compact"></v-checkbox>
          <p class="mx-auto py-2 text-grey-darken-1" :class="{ 'd-none': login || esqueceu }" justify="center">Continuando, você concorda com nossos <a href="#" class="text-teal-darken-3">termos de serviço</a>.</p>
        </div>
      <br/>

        <v-btn
          :disabled="!form"
          :loading="loading"
          :rules="[required]"
          block
          color="teal-darken-3"
          type="submit"
          variant="elevated"
          :to="esqueceu ? 'login' : 'meusprodutos'"
        >
          {{ botaoAcao }}
        </v-btn>

        <div class="d-flex flex-column">
          <p class="mx-auto py-2 text-grey-darken-1" :class="{ 'd-none': esqueceu }" justify="center">ou</p>
        </div>

        <v-btn
          block
          color="teal-darken-3"
          type="submit"
          variant="outlined"
          prepend-icon="mdi-google"
          to="meusprodutos"
          :class="{ 'd-none': esqueceu }"
        >
          {{ botaoAcao }} com Google
        </v-btn>
      </v-form>

      <div class="d-flex flex-column pt-3">
        <p class="mx-auto py-2 text-grey-darken-1" :class="{ 'd-none': cadastro || esqueceu }" justify="center"><a href="/cadastro" class="text-grey-darken-1">Criar conta</a></p>
        <p class="mx-auto py-2 text-grey-darken-1" :class="{ 'd-none': login || esqueceu }" justify="center">Já tem uma conta? <a href="/login" class="text-teal-darken-3">Entrar</a></p>
        <p class="mx-auto py-2 text-grey-darken-1" :class="{ 'd-none': cadastro || esqueceu }" justify="center"><a href="/resetsenha" class="text-teal-darken-3">Esqueceu sua senha?</a></p>
      </div>

    </v-card>
  </v-container>
</template>

<script>
  export default {
  name: 'Acesso',
  data: () => ({
    form: false,
    name: null,
    email: null,
    password: null,
    loading: false,
    show1: false,
    show2: true,
    passwd: 'Password',
    rules: {
      required: value => !!value || 'Campo obrigatório.',
      min: v => v.length >= 8 || 'Pelo menos 8 caracteres.',
      emailMatch: () => (`The email and password you entered don't match`),
    }
  }),
  methods: {
    onSubmit () {
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
  },
  props: {
    login: {
      type: Boolean,
      default: false,
    },
    cadastro: {
      type: Boolean,
      default: false,
    },
    esqueceu: {
      type: Boolean,
      default: false,
    },
    botaoAcao: {
      type: String
    },
  },
}
</script>
