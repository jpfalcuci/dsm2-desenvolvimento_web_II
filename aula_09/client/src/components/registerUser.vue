<template>
  <div>
    <h1>Cadastro de usuários</h1>

    <form @submit.prevent="registerOrUpdateUser">
      <input type="text" v-model="nome" placeholder="Digite seu nome" />
      <input type="email" v-model="email" placeholder="Digite seu email" />
      <input type="password" v-model="password" placeholder="Digite sua senha" />
      <button type="submit" :title='editMode ? "Atualizar" : "Registrar"'>{{ editMode ? "Atualizar" : "Registrar" }}</button>
    </form>

    <p>{{ message }}</p>

    <table v-if="users.length" class="user-list">
      <thead>
        <tr class="user-title">
          <th>Nome</th>
          <th>Email</th>
          <th>Editar</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="user-item">
          <td>{{ user.nome }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="editUser(user)" class="edit-button" title="Editar">
              <span class="material-icons">edit</span>
            </button>
          </td>
          <td>
            <button @click="deleteUser(user)" class="delete-button" title="Deletar">
              <span class="material-icons">delete</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script src="./registerUser.js"></script>
<style src="./registerUser.css" scoped></style>
