<template>
  <v-container fluid class="d-flex justify-center">
    <v-card max-width="1000px" class="bg-transparent" flat="true">
      <div class="d-flex flex-no-wrap justify-space-between">
        <v-avatar class="ma-16" size="350" rounded="0">
          <v-img src="src/assets/vent_saiba_mais.png"></v-img>
        </v-avatar>
        <div>
          <v-card-title class="text-h5 mt-16">Porque a VentoFresco?</v-card-title>
          <v-card-text>Nossos produtos  são uma verdadeira revolução na indústria de ventilação, combinando a mais alta tecnologia com a preocupação ambiental, permitindo o controle por aplicativos móveis e apresentando recursos inovadores para minimizar o impacto no meio ambiente. Descubra como nossos ventiladores estão definindo o futuro da ventilação sustentável!</v-card-text>
          <v-card-actions>
            <v-btn variant="tonal" class="bg-grey-darken-4">Saiba mais</v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </v-container>
</template>

<script>
  export default({
    name: 'LojaSaibaMais',
  })
</script>