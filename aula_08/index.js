const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.listen(8080, () => {
    console.log("O servidor está ativo na porta 8080!");
})

const segredo = "Pa$$w0rd";     // senha do serviço

function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).json({ message: 'Token não fornecido!' });
    }

    try {
        const decodificado = jwt.verify(token, segredo);
        req.user = decodificado;
        next()
    } catch (err) {
        res.status(403).json({ message: 'Token inválido! '})
    }
}

app.post("/login", (req, res) => {
    const user = {
        id: 123,
        name: 'João',
        password: '123João'
    }

    const token = jwt.sign(user, segredo);
    res.status(200).json({token});
})

app.get("/userProtegido", verifyToken, (req, res) => {
    const { id, name, password } = req.user;

    res.status(200).json({id, name, password});
})