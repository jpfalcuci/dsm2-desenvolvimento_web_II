<template>
  <v-app>
    <SysMenuLateral />
    <SysBarraSuperior />
    <v-main class="bg-grey-lighten-5">
      <v-container class="bg-grey-lighten-4 mx-auto my-5 pa-0">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import SysBarraSuperior from '@/components/SysBarraSuperior.vue'
  import SysMenuLateral from '@/components/SysMenuLateral.vue';
</script>
