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
const encoding = 'utf-8';

app.listen(porta, () => {
    console.log(`O server está ativo em http://localhost:${porta}`);
});


    // FUNÇÕES


function lerJson(caminhoArquivo) {
    if (!fs.existsSync(caminhoArquivo)) {                   // verifica se o arquivo existe
        fs.writeFileSync(caminhoArquivo, '[]', encoding);   // se não existir, cria um novo arquivo com um array vazio
    }
    try {
        const arquivo = fs.readFileSync(caminhoArquivo, encoding);
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


app.get('/tarefas', (req, res) => { 
    let tarefas = lerJson(arquivo);

    if (tarefas) {
        res.status(200).json({
            status: 'success',
            data: tarefas
        });
    } else {
        // Erro 500: Internal Server Error (Erro interno do servidor)
        res.status(500).json({ erro: "Erro ao ler arquivo" });
    }
})


app.get('/tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);
    let tarefa = tarefas.find(tarefa => tarefa.id == req.params.id);    // encontra a tarefa que tem o ID informado

    if (tarefa) {   // se encontrar, retorna a tarefa
        res.status(200).json({
            status: 'success',
            data: tarefa
        });
    } else {
        // Erro 404: Not Found (Não encontrado)
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.post('/criar-tarefa', (req, res) => {
    let tarefas = lerJson(arquivo);

    // verifica se foi informado um "título" para a tarefa, e se o título é uma string e não é vazia
    if (req.body.titulo && typeof req.body.titulo === 'string' && req.body.titulo.trim() !== '') {
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
            titulo: req.body.titulo.trim(),
            descricao: req.body.descricao || '',    // se não for informada descrição, então será ''
            // verifica se foi informado valor de 'feito' e se é boolean, se não, valor será 'false'
            feito: typeof req.body.feito === 'boolean' ? req.body.feito : false
        };
    
        tarefas.push(novaTarefa);   // envia o novo objeto para o json
        salvarJson(tarefas, arquivo);
        res.status(200).json({
            status: 'success',
            data: novaTarefa
        });
    } else {
        // Erro 400: Bad Request (Requisição inválida)
        res.status(400).json({ mensagem: "O título da tarefa é obrigatório" });
    }
})


app.put('/atualizar-tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);
    let index = tarefas.findIndex(tarefa => tarefa.id == req.params.id);    // coleta a posição do item do ID informado
    
    if (index != -1) {
        let tarefaAtualizada = {    // mescla apenas os campos enviados na requisição
            ...tarefas[index],      // operador spread '...' cria uma cópia do item na posição 'index' do objeto 'tarefas'.
            // verifica se foi informado título, se é string e se não é vazia, se não, mantém título existente
            titulo: typeof req.body.titulo === 'string' && req.body.titulo.trim() !== '' ? req.body.titulo.trim() : tarefas[index].titulo,
            descricao: req.body.descricao || tarefas[index].descricao,  // se não for informada descrição, mantém descrição existente
            // verifica se foi informado valor de 'feito' e se é boolean, se não, mantém o valor existente
            feito: typeof req.body.feito === 'boolean' ? req.body.feito : tarefas[index].feito 
        };
        tarefas[index] = tarefaAtualizada;  // atualiza o item do json, usando o index
        salvarJson(tarefas, arquivo);
        res.status(200).json({
            status: 'success',
            data: tarefaAtualizada
        });
    } else {
        // Erro 404: Not Found (Não encontrado)
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})


app.delete('/deletar-tarefa/:id', (req, res) => {
    let tarefas = lerJson(arquivo);
    let index = tarefas.findIndex(tarefa => tarefa.id == req.params.id);    // coleta a posição do item do ID informado

    // se o novo objeto for menor que o original, significa que um item foi removido
    if (index !== -1) {
        tarefas.splice(index, 1);   // remove o item correspondente ao index
        salvarJson(tarefas, arquivo);
        res.status(200).json({
            status: 'success',
            mensagem: `Tarefa com id ${req.params.id} excluída com sucesso`
        });
    } else {
        // Erro 404: Not Found (Não encontrado)
        res.status(404).json({ erro: "Tarefa não encontrada" });
    }
})
