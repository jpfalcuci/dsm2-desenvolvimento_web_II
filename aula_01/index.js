// chama biblioteca do express
const express = require("express");
const app = express();

// chama a abertura do serviço
// cria servidor express
app.listen(8080);

// cria primeira rota /
app.get("/", () => {
    console.log("Oba, bão?");
})
