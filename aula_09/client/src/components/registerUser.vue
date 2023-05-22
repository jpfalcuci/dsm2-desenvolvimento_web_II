<template>
    <h1>Cadastro Usuários</h1>
    <form @submit.prevent="registerUser">

      <input type="text" v-model="nome" placeholder="Digite seu nome">
      <input type="email" v-model="email" placeholder="Digite seu email">
      <input type="password" v-model="senha" placeholder="Digite sua senha">

      <button type="submit">Registrar</button>
    </form>
    <p>{{ message }}</p>
</template>
<script>
  export default {
    data() {
      return {
        nome: '',
        email: '',
        senha: '',
        message: '',
      }
    },
    methods: {
      registerUser() {
        const data = {
          nome: this.nome,
          email: this.email,
          senha: this.senha
        }
        fetch("http://localhost:3000/api/registerUser", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(data)
        })
          .then(async (res) => {
            this.message = await res.text();
          })
          .catch(async (err) => {
            this.message = await err.text();
          })
      }
    }
}
</script>
<style scoped>
h1 {
  color: tomato;
}
form {
  display: grid;
  grid-gap: 10px;
  width: 400px;
  margin: 0 auto;
}
form input {
  padding: 10px;
  border-radius: 10px;
}
</style>