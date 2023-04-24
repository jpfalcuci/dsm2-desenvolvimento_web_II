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
        console.table(rows);
        res.status(200).send(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro de conexão com o servidor");
    }
});
