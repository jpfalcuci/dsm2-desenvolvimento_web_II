const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./data/data");

app.use(cors());
app.use(express.json());
app.listen(3000, () => {
    console.log("Server ativo na porta 3000");
})

// Encerrar as conexões do pool de conexões ao final do processo
process.on('SIGINT', () => {
    pool.end();
    process.exit();
});

let register = null;

app.get('/api/getUsers', async(req, res) => {
    try {
        register = await pool.connect();
        const data = await register.query(`SELECT * FROM Users`);
        console.table(data.rows);
        res.status(200).send(data.rows)
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro na consulta")
    }
})

app.post('/api/registerUser', async (req, res) => {
    try {
        register = await pool.connect();
        const { nome, email, password } = req.body;
        const result = await register.query(`INSERT INTO Users (id, nome, email, password) 
            VALUES (uuid_generate_v4(), '${nome}', '${email}', '${password}') RETURNING *`);
        console.table(result.rows);
        res.send("Cadastrado com sucesso!");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro ao cadastrar usuário");
    } finally {
        register.release();     // Liberar a conexão do pool de conexões
    }
});

app.put('/api/updateUser/:id', async(req, res) => {
    try {
        register = await pool.connect();
        const { nome, email, password } = req.body;
        const { id } = req.params;
        const result = await register.query(`UPDATE Users 
            SET nome = '${nome}', email = '${email}', password = '${password}'
            WHERE id = '${id}' RETURNING *`);
        console.table(result.rows);
        res.status(200).send("Usuário atualizado com sucesso")
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro na atualização")
    }
})

app.delete('/api/deleteUser/:id', async(req, res) => {
    try {
        register = await pool.connect();
        const { id } = req.params;
        const result = await register.query(`DELETE FROM Users 
            WHERE id = '${id}' RETURNING *`);
        console.table(result.rows);
        res.status(200).send("Usuário excluído com sucesso")
    } catch (err) {
        console.error(err);
        res.status(500).send("Erro na atualização")
    }
})
