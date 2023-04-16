const express = require("express");
const app = express();
const fs = require("fs");                   // pacote fs para ler e gravar arquivos
const bodyParser = require("body-parser");  // pacote body-parser para analisar o corpo das solicitações HTTP
const cors = require("cors");               // pacote cors para permitir solicitações de origens diferentes

app.use(bodyParser.urlencoded({ extended: false }));    // p/ analisar solicitações codificadas em url
app.use(bodyParser.json());                             // p/ analisar solicitações JSON
app.use(cors());

const porta = 6660
const arquivo = './tarefas.json';
const encode = 'utf-8';

app.listen(porta, () => {
    console.log(`O server está ativo em http://localhost:${porta}`);
});


    // FUNÇÕES


function lerJson(caminhoArquivo) {
    if (!fs.existsSync(caminhoArquivo)) {               // verifica se o arquivo existe
        fs.writeFileSync(caminhoArquivo, '[]', encode); // se não existir, cria um novo arquivo com um array vazio
    }
    try {
        const arquivo = fs.readFileSync(caminhoArquivo, encode);
        const conteudo = JSON.parse(arquivo);
        return conteudo;
    } catch (err) {
        console.error(err);
        return null;
    }
}

function salvarJson(objeto, caminhoArquivo) {
    fs.writeFileSync(caminhoArquivo, JSON.stringify(objeto));
}


    // MÉTODOS


app.get('/', (req, res) => { 
    let tarefas = lerJson(arquivo);
    if (tarefas) {
        res.json(tarefas);
    } else {
        res.status(500).json({ erro: "Erro ao ler arquivo" });
    }
})


app.get('/tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);
    let tarefa = tarefas.find(tarefa => tarefa.id == req.params.id);    // encontra a tarefa que tem o ID informado

    if (tarefa) {
        res.json(tarefa);   // se encontrar, retorna a tarefa
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.post('/criar-tarefa', (req, res) => {
    let tarefas = lerJson(arquivo);

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
    salvarJson(tarefas, arquivo);
    res.json(novaTarefa);
})


app.put('/atualizar-tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);

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
        salvarJson(tarefas, arquivo);
        res.json(tarefaAtualizada);
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.delete('/deletar-tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);

    // filtra selecionando todos os itens menos o item com o ID informado, e adiciona a um novo objeto
    let tarefasAtualizadas = tarefas.filter(tarefa => tarefa.id != req.params.id);

    // se o novo objeto for menor que o original, significa que um item foi removido
    if (tarefasAtualizadas.length < tarefas.length) {
        salvarJson(tarefasAtualizadas, arquivo);
        res.json({ mensagem: "Tarefa excluída com sucesso" });
    } else {
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})
