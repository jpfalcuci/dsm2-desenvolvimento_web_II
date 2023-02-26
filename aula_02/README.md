# API com requisições

Para esta aula trabalharemos com dois tipos de requisições para a API:

* Utilizando um debugador HTTP chamado insomnia;
* Utilizando HTML como inserção de dados.

Vamos criar o básico…

`npm init -y`

Lembrando que este código cria o arquivo chamado de packge.json.

```
{
  "name": "aula-02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

O próximo passo é criar as dependências do projeto. Será utilizado duas novas instalações (nodemon e body-parser)

`npm i express body-parser nodemon`

### Nodemon

Nodemon é uma ferramenta para desenvolvimento de software que permite que o Node.js (uma plataforma de desenvolvimento de aplicativos baseados em JavaScript) execute automaticamente uma ação de reinicialização sempre que houver mudanças no código fonte.

Isso é muito útil durante o desenvolvimento, pois permite que você teste suas alterações sem precisar reiniciar manualmente o servidor a cada vez que fizer uma mudança. Assim, você pode economizar tempo e ter uma experiência de desenvolvimento mais eficiente.

### body-parser

Body-parser é um middleware para Node.js que facilita a extração dos dados do corpo (body) de uma requisição HTTP. Ele é usado principalmente em aplicativos web para processar os dados enviados em uma requisição POST ou PUT, como formulários ou JSON.

O body-parser interpreta o corpo da requisição, realiza a análise dos dados e os disponibiliza para o resto da aplicação em uma estrutura de dados fácil de manipular, como objeto JavaScript ou array. Assim, o body-parser torna mais fácil processar os dados de uma requisição HTTP e integrá-los à aplicação.

```
{
  "name": "aula_02",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.1",
    "express": "^4.18.2",
    "nodemon": "^2.0.20"
  }
}
```

Após criar as dependências agora é a hora de criar nosso arquivo principal index.js

```
const express = require("express");

const app = express();

app.listen(8080, () => console.log("Servidor ativo na porta 8080"));

app.use(express.json());

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
```

Percebe-se que há novos elementos agora em nossa API, fora chamado os métodos de conversão do JSON e body-parser.

### Criando as rotas de teste

#### Via JSON

A criação da rota via JSON é simples, porém existe um elemento novo para a requisição de parâmetros. É necessário desestruturá-los usando {} e aplicando o nome da variável dentro delas. Segue o exemplo:

```
//Entrada via JSON
app.post("/testeGET", (req, res) => {
  const { name } = req.body;
  console.log(name);
});
```

#### Via HTML

A requisição de dados via HTML é um processo semelhante. Para isso, criaremos um array e inseriremos os valores nele através do HTML.

```
let nomes = ["Lois", "Lana", "Clark", "Bruce"];

//Entrada via HTML
app.post("/testeGETHTML", (req, res) => {
  const { name } = req.body;
  console.log(name);
  nomes.push(name);

  return res.send(`<h1>${[nomes]}</h1>`)
});
```
