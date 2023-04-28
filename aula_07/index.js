const express = require("express");
const { pool } = require("./data/data");
const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080!")
});

app.get("/getUsers", async (req, res) => {
    try {
        const client = await pool.connect();
        const { rows } = await client.query("SELECT * FROM Users");
        // console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});

app.get("/getUser/:id", async (req, res) => {
    try {
        const client = await pool.connect();
        const { id } = req.params;
        const { rows } = await client.query(`SELECT * FROM Users WHERE ID = ${id}`);
        // console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});

app.post('/includeUser', async (req, res) => {
    try {
        const client = await pool.connect();
        const { id, nome } = req.body;
        // console.log(id, nome);
        await client.query(`INSERT INTO Users (ID, nome) VALUES (${id}, '${nome}')`);
        res.status(200).send(`Usuário(a) '${nome}' inserido(a) com sucesso`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
})

app.put('/updateUser/:id', async (req, res) => {
    try {
        const client = await pool.connect();
        const { id } = req.params;
        const { nome } = req.body;
        // console.log(id, nome);
        await client.query(`UPDATE Users SET nome = '${nome}' WHERE ID = ${id}`);
        res.status(200).send(`Usuário(a) '${nome}' atualizado(a) com sucesso`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
})

app.delete('/deleteUser/:id', async (req, res) => {
    try {
        const client = await pool.connect();
        const { id } = req.params;
        // console.log(id);
        await client.query(`DELETE FROM Users WHERE ID = ${id}`);
        res.status(200).send(`Usuário(a) deletado(a) com sucesso`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
})
