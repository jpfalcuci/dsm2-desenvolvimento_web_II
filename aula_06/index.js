const express = require("express"); // chama a dependência express e armazena na constante "express"

const app = express();              // simplificando o nome da função

app.use(express.json());            // função que "lê" o json - não inclusa na dependencia express 

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080");
})

// CREATE READ UPDATE DELETE (CRUD)
// POST, GET, PUT, DELETE
app.get('/', () => {
    console.log("O NEGÓCIO DEU CERTO!!!");
})

// SELECT * FROM Alunos WHERE id = 23
app.get('/getAluno', (req, res) => {
    const { id } = req.body;
    console.log(`O aluno de ID: ${id} foi encontrado!`);
    res.send(`O aluno de ID: ${id} foi encontrado!`)
})

/*
npm init -y => cria package.json
npm i express
npm i express nodemon
adicionar "start": "nodemon index.js" dentro de "script" dentro do arquivo package.json
npm start
*/