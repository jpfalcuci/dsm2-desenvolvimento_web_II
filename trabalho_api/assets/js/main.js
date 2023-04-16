const { createApp } = Vue;

createApp({
    data() {
        return {
            tarefas: []
        }
    },
    mounted() {
        fetch('http://localhost:6660')
            .then(response => response.json())
            .then(data => {
                this.tarefas = data
                console.log(this.tarefas)
            })
            .catch(error => console.log(error))
    }
}).mount("#app");
