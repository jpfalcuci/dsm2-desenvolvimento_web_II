<template>
  <v-app>
    <MenuLateral />
    <MenuSuperior />
    <v-main class="bg-grey-lighten-5">
      <v-container class="bg-grey-lighten-4 mx-auto my-5 pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import MenuSuperior from '@/components/MenuSuperior.vue'
  import MenuLateral from '@/components/MenuLateral.vue';
</script>
