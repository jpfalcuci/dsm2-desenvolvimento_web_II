const express = require("express");
const bodyParser = require("body-parser"); // importando o body-parser

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // configurando o body-parser

app.listen(8080, () => {
    console.log("O server está ativo na porta 8080");
});

let nome = "João";
let cor = "teal"

app.get("/", (req, res) => {
    res.send(`<h1 style="color: ${cor}">Olá ${nome}!</h1>`);
})

app.post("/getHTML", (req, res) => {
    const { nome } = req.body;
    // console.log(`Olá ${nome}`);
    res.send(`<h1 style="color: ${cor}">Olá ${nome}!</h1>`);
})
