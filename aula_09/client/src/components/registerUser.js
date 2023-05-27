export default {
    data() {
        return {
            nome: "",
            email: "",
            password: "",
            message: "",
            users: [],
            editMode: false,
            editUserId: null,
        };
    },

    mounted() {
        this.getUsers();
    },

    methods: {
        async registerOrUpdateUser() {
            const data = {
                nome: this.nome,
                email: this.email,
                password: this.password,
            };

            if (this.editMode) {
                // Atualizar usuário
                const userId = this.editUserId;
                try {
                    const response = await fetch(
                        `http://localhost:3000/api/updateUser/${userId}`,
                        {
                            method: "PUT",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data),
                        }
                    );
                    this.message = await response.text();
                } catch (error) {
                    this.message = error.message;
                }
            } else {
                // Registrar novo usuário
                try {
                    const response = await fetch(
                        "http://localhost:3000/api/registerUser",
                        {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(data),
                        }
                    );
                    this.message = await response.text();
                } catch (error) {
                    this.message = error.message;
                }
            }
            this.resetForm();
            this.getUsers();
        },

        async getUsers() {
            try {
                const response = await fetch(
                    "http://localhost:3000/api/getUsers"
                );
                const data = await response.json();
                this.users = data;
            } catch (error) {
                this.message = error.message;
            }
        },

        editUser(user) {
            this.nome = user.nome;
            this.email = user.email;
            this.password = user.password;
            this.editMode = true;
            this.editUserId = user.id;
        },

        async deleteUser(user) {
            const userId = user.id;

            try {
                const response = await fetch(
                    `http://localhost:3000/api/deleteUser/${userId}`,
                    {
                        method: "DELETE",
                    }
                );
                this.message = await response.text();
                this.getUsers(); // Atualiza a lista de usuários após a exclusão
            } catch (error) {
                this.message = error.message;
            }
        },

        resetForm() {
            this.nome = "";
            this.email = "";
            this.password = "";
            this.editMode = false;
            this.editUserId = null;
        },
    },
};
