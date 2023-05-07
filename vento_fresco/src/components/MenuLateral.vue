<template>
  <v-navigation-drawer permanent theme="dark">

    <v-container class="p-16 h-100">
      <v-list density="comfortable">
        <v-list-item>
          <h1 class="text-h6 font-weight text-center"><b>Vento</b>Fresco</h1>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
  
      <v-list density="compact" nav>
        <v-list-item v-for="(menu, index) in menus" :key="index" :prepend-icon="menu.icon" :title="menu.title" :value="menu.value" :to="menu.path"></v-list-item>
      </v-list>
      <v-divider></v-divider>
  
      <v-list density="compact" nav>
        <v-list-item
          lines="two"
          prepend-avatar="https://randomuser.me/api/portraits/men/96.jpg"
          title="Jerry Duncan"
          subtitle="Admin"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-logout" title="Sair" value="sair" to="/"></v-list-item>
      </v-list>
    </v-container>
  
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'MenuLateral',
    data() {
      return {
        menus: [
          { icon: 'mdi-shopping', title: 'Loja', value: 'loja', path: '/' },
          { icon: 'mdi-package', title: 'Meus Produtos', value: 'meusprodutos', path: '/meusprodutos' },
          { icon: 'mdi-finance', title: 'Vendas', value: 'vendas', path: '/vendas' },
          { icon: 'mdi-account-check', title: 'Perfis', value: 'perfis', path: '/perfis' },
          { icon: 'mdi-account-group', title: 'Usuários', value: 'usuarios', path: '/usuarios' },
          { icon: 'mdi-factory', title: 'Produção', value: 'producao', path: '/producao' },
          { icon: 'mdi-screw-machine-flat-top', title: 'Insumos', value: 'insumos', path: '/insumos' },
          { icon: 'mdi-fan', title: 'Produtos', value: 'produtos', path: '/produtos' },
          { icon: 'mdi-cog', title: 'Configurações', value: 'configuracoes', path: '/configuracoes' }
        ]
      }
    }
  }
</script>