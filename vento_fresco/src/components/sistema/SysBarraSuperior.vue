<template>
  <v-app-bar elevation="1" class="bg-grey-lighten-5">
    <v-app-bar-title class="text-grey-darken-1">{{ dataFormatada }}</v-app-bar-title>
    <div class="w-33">
        <v-text-field
            density="compact"
            variant="underlined"
            label="Pesquisa"
            append-inner-icon="mdi-magnify"
            single-line
            hide-details
            class="pa-0 mr-10"
        ></v-text-field>
    </div>
  </v-app-bar>
</template>

<script>
import moment from 'moment';
import 'moment/locale/pt-br';

export default {
    name: 'SysBarraSuperior',
    computed: {
        dataFormatada() {
            let data = moment().format("llll")
            return data;
        }
    },
    created() {
        moment.locale('pt-br');
    },
}
</script>
