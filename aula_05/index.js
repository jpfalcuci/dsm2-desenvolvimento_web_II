const { createApp } = Vue;

createApp({
    data() {
        return {
            acesa: false,
        }
    },
    methods: {
        acender: function() {
            this.acesa = !this.acesa;
        }
    }
}).mount("#app");
