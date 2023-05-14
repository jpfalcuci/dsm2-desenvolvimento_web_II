<template>
  <v-app>
    <!-- <MenuLateral /> -->
    <v-main >
      <v-container fluid class="pa-0" theme="dark">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import MenuLateral from '@/components/MenuLateral.vue';
</script>
