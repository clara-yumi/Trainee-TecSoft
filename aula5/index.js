import express from "express";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const app = express()
//const port = 4000;  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

/*
    GET - Buscar
    POST - Criar
    PUT - Atualizar
    DELETE - Remover 
*/

app.get("/", (req, res) => {   //req - request - requisição da rota /       res - response
    res.sendFile(
        path.join(__dirname,"pages", "index.html")
    );
});

app.get("/contato", (req,res) => {
    res.sendFile(
        path.join(__dirname, "pages", "contato.html")
    );
});

/*app.get("/usuarios", (req, res)=> {
    res.json([
        { id: 1, nome: "Gabriel" },
        { id: 2, nome: "João" },
        { id: 3, nome: "Maria"}
    ]);
}); */

/*app.get("/usuarios/:id", (req,res) => {    //:id = parametro, dinamico
    const { id } = req.params;   //captura parametros presentes na url

    res.json({
        id,
        nome: `Usuário ${id}`
    });
}); */

app.get("/usuarios", (req,res) => {
    const { nome } = req.query;

    const usuarios = [
        { id: 1, nome: "Gabriel" },
        { id: 2, nome: "João" },
        { id: 3, nome: "Maria"}
    ];

    if (!nome) {
        return res.json(usuarios);
    }
    const buscaUsuario = usuarios.find(usuario => usuario.nome === nome);
    if(!buscaUsuario){
        return res.status(404).json({ mensagem: "Usuário não encontrado"});
    }
    return res.json(buscaUsuario);
});

app.get("/busca", (req, res) => {
    const { termo } = req.query;  //texto apos "?"

    res.send(`Você pesquisou por ${termo}`); 

});

app.listen(port, () => {               //listen - escutar as requisições
    console.log(`Example app listening on port ${port}`);  //printa quando o servidor foi executado com sucesso
});
