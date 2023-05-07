<template>
  <v-app>
    <MenuLateral />
    <v-main>
      <v-container class="ma-0 pa-0 w-100 h-100">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import MenuLateral from '@/components/MenuLateral.vue';
</script>
