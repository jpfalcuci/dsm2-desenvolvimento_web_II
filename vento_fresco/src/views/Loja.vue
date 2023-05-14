<template>
  <v-container fluid class="ma-0 pa-0 w-100">
    <v-card class="ma-0 pa-0 w-100" theme="dark">
      <v-tabs
        v-model="tab"
        color="teal-darken-3"
        align-tabs="center"
      >
        <v-tab :value="1">VentoFresco</v-tab>
        <v-tab :value="2">Serviços</v-tab>
        <v-tab :value="3">Produtos</v-tab>
        <v-tab :value="4">Sobre</v-tab>
        <v-tab :value="5"><a href="/login">Login</a></v-tab>
      </v-tabs>
    </v-card>
  </v-container>
  <v-btn to="/login">Login</v-btn>
</template>

<script>
export default {
  data: () => ({
    tab: null,
  }),
}
</script>