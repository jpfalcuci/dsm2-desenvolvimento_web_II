const express = require("express");
const app = express();
const fs = require('fs');                   // pacote fs para ler e gravar arquivos
const bodyParser = require("body-parser");  // pacote body-parser para analisar o corpo das solicitações HTTP

app.use(bodyParser.urlencoded({ extended: false }));    // p/ analisar solicitações codificadas em url
app.use(bodyParser.json());                             // p/ analisar solicitações JSON

const porta = 6660
const arquivo = './tarefas.json';
const encode = 'utf-8';

app.listen(porta, () => {
    console.log(`O server está ativo em http://localhost:${porta}`);
});


    // MÉTODOS


app.get('/', (req, res) => {
    let tarefas = JSON.parse(fs.readFileSync(arquivo, encode)); // lê o arquivo json
    res.json(tarefas);
})


app.get('/tarefa/:id', (req, res) => {
    let tarefas = JSON.parse(fs.readFileSync(arquivo, encode));         // lê o arquivo json
    let tarefa = tarefas.find(tarefa => tarefa.id == req.params.id);    // encontra a tarefa que tem o ID informado

    if (tarefa) {
        res.json(tarefa);   // se encontrar, retorna a tarefa
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.post('/criar-tarefa', (req, res) => {
    let tarefas = JSON.parse(fs.readFileSync(arquivo, encode)); // lê o arquivo json

    // Encontra o maior ID existente
    let maiorId = 0;
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id > maiorId) {
            maiorId = tarefas[i].id;
        }
    }

    // cria um novo objeto com os valores recebidos e um novo ID baseado no maior ID existente
    let novaTarefa = {
        id: maiorId + 1,                        // maior id encontrado + 1
        titulo: req.body.titulo,
        descricao: req.body.descricao || '',    // se não for informada descrição, então será ''
        feito: req.body.feito || false          // se não for informado o campo 'feito', então será false
    };

    tarefas.push(novaTarefa);   // envia o novo objeto para o json
    fs.writeFileSync(arquivo, JSON.stringify(tarefas)); // substitui o conteúdo do json com o novo objeto
    res.json(novaTarefa);
})


app.put('/atualizar-tarefa/:id', (req, res) => {
    let tarefas = JSON.parse(fs.readFileSync(arquivo, encode)); // lê o arquivo json

    // coleta a posição do item do ID informado
    let index = tarefas.findIndex(tarefa => tarefa.id == req.params.id);

    if (index != -1) {
        // mescla apenas os campos enviados na requisição
        let tarefaAtualizada = {
            // operador spread '...' cria uma cópia do item na posição 'index' do objeto 'tarefas'.
            ...tarefas[index], 
            titulo: req.body.titulo || tarefas[index].titulo,           // se não for informado título, mantém título existente
            descricao: req.body.descricao || tarefas[index].descricao,  // se não for informada descrição, mantém descrição existente
            feito: req.body.feito || tarefas[index].feito               // se não for informado o valor de 'feito', mantém o valor existente
        };

        tarefas[index] = tarefaAtualizada;                  // atualiza o item do json, usando o index
        fs.writeFileSync(arquivo, JSON.stringify(tarefas)); // substitui o conteúdo do json com o novo objeto
        res.json(tarefaAtualizada);
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.delete('/deletar-tarefa/:id', (req, res) => {
    let tarefas = JSON.parse(fs.readFileSync(arquivo, encode)); // lê o arquivo json

    // filtra selecionando todos os itens menos o item com o ID informado, e adiciona a um novo objeto
    let tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id != req.params.id);

    // se o novo objeto for menor que o original, significa que um item foi removido
    if (tarefasAtualizadas.length < tarefas.length) {
        fs.writeFileSync(arquivo, JSON.stringify(tarefasAtualizadas));  // substitui o conteúdo do json com o novo objeto
        res.json({ mensagem: "Tarefa excluída com sucesso" });
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})
