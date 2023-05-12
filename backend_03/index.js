const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { pool, secret, saltRounds, port } = require("./data/data");

const app = express();
app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`O servidor está ativo na porta ${port}!`);
});


function verifyToken(req, res, next) {
    const token = req.headers.authorization;
    if (!token) {
        res.status(401).json({ message: "Token não fornecido!" });  // unauthorized
    }
    try {
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: "Token inválido! " });  // forbidden
    }
}

function validateNameAndUser(str) {
    return typeof str === 'string' && !/^\d+$/.test(str) && str.length >= 4;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePasswd(passwd) {
    return passwd.length >= 6;
}


// homepage
app.get("/", verifyToken, (req, res) => {

});

// mostrar todos os usuários
app.get("/users", async (req, res) => {
    try {
        const client = await pool.connect();
        try {
            const result = await client.query("SELECT * FROM users");
            const users = result.rows;
            res.status(200).json({ users });    // ok
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao buscar usuários." });  // internal server error
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro de conexão com o servidor." });   // internal server error
    }
});

// criar um usuário
app.post("/users", async (req, res) => {
    try {
        const client = await pool.connect();
        try {
            const { nome, user, email, passwd } = req.body;
            const hashedPasswd = bcrypt.hashSync(passwd, parseInt(saltRounds));
            if (!validateNameAndUser(nome)) {
                res.status(400).json({ message: "Nome inválido." });    // bad request
            }
            if (!validateNameAndUser(user)) {
                res.status(400).json({ message: "Usuário inválido." }); // bad request
            }
            if (!validateEmail(email)) {
                res.status(400).json({ message: "Email inválido." });   // bad request
            }
            if (!validatePasswd(passwd)) {
                res.status(400).json({ message: "Senha inválida." });   // bad request
            }
            const result = await pool.query(`INSERT INTO users (nome, usuario, email, passwd) VALUES ('${nome}', '${user}', '${email}', '${hashedPasswd}') RETURNING *`);
            const newUser = result.rows[0];
            const token = jwt.sign({ id: newUser.id }, secret, { expiresIn: "1h" });
            res.status(201).json({ newUser, token });   // created
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao criar novo usuário." });   // internal server error
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro de conexão com o servidor." });   // internal server error
    }
});

// login
app.post("/login", async (req, res) => {
    try {
        const client = await pool.connect();
        try {
            const { user, passwd } = req.body;
            // ! TENTAR COLETAR DADOS DOS CAMPOS DE INPUT
            const result = await pool.query(`SELECT * FROM users WHERE usuario = '${user}'`);
            const loggedUser = result.rows[0];
            if (!loggedUser) {
                return res.status(401).json({ message: "Usuário ou senha incorretos." });   // unauthorized
            }
            const isValidPasswd = await bcrypt.compare(passwd, loggedUser.passwd);
            if (!isValidPasswd) {
                return res.status(401).json({ message: "Usuário ou senha incorretos." });   // unauthorized
            }
            const token = jwt.sign({ user: loggedUser.user }, secret, {expiresIn: "1h",});
            // ! VERIFICAR COMO ARMAZENAR TOKEN NOS COOKIES OU LOCALSTORAGE
            res.status(200).json({ user, token });  // ok
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao realizar login." });   // internal server error
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro de conexão com o servidor." });   // internal server error
    }
});

// atualizar um usuário
app.put("/users/:id", verifyToken, async (req, res) => {
    try {
        const client = await pool.connect();
        try {
            const { id } = req.params;
            const { nome, user, email, passwd } = req.body;
            if (nome) {
                if (!validateNameAndUser(nome)) {
                    res.status(400).json({ message: "Nome inválido." });    // bad request
                }
            }
            if (user) {
                if (!validateNameAndUser(user)) {
                    res.status(400).json({ message: "Usuário inválido." }); // bad request
                }
            }
            if (email) {
                if (!validateEmail(email)) {
                    res.status(400).json({ message: "Email inválido." });   // bad request
                }
            }
            if (passwd) {
                if (!validatePasswd(passwd)) {
                    res.status(400).json({ message: "Senha inválida." });   // bad request
                }
            }
            const hashedPasswd = bcrypt.hashSync(passwd, parseInt(saltRounds));
            const result = await client.query(`UPDATE users SET nome='${nome}', usuario='${user}', email='${email}', passwd='${hashedPasswd}' WHERE id='${id}' RETURNING *`);
            const updatedUser = result.rows[0];
            if (updatedUser) {
                res.status(200).json({ message: "Usuário atualizado com sucesso.", updatedUser });  // ok
            } else {
                res.status(500).json({ message: `Usuário com id ${id} não encontrado no banco de dados.` });    // internal server error
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao atualizar o usuário." });  // internal server error
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro de conexão com o servidor." });   // internal server error
    }
});

// deletar um usuário
app.delete("/users/:id", verifyToken, async (req, res) => {
    try {
        const client = await pool.connect();
        try {
            const { id } = req.params;
            const result = await client.query(`DELETE FROM users WHERE id='${id}' RETURNING *`);
            const deletedUser = result.rows[0];
            if (deletedUser) {
                res.status(200).json({ message: "Usuário deletado com sucesso.", deletedUser });    // ok
            } else {
                res.status(500).json({ message: `Usuário com id ${id} não encontrado no banco de dados.` });    // internal server error
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Erro ao deletar o usuário." });    // internal server error
        } finally {
            client.release();
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Erro de conexão com o servidor." });   // internal server error
    }
});
