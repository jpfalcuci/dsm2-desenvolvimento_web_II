const { createApp } = Vue;

createApp({
    data() {
        return {
            tarefas: []
        }
    },
    mounted() {
        fetch('http://localhost:6660/tarefas/')
            .then(response => response.json())
            .then(data => {
                this.tarefas = data.data
                console.log(this.tarefas)
            })
            .catch(error => console.log(error))
    }
}).mount("#app");
