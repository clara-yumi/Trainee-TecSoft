import express from "express";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const app = express()
const port = 3000;  

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {  
    res.sendFile(
        path.join(__dirname, "pag_inicial.html")
    );
});

app.get("/integrantes", (req,res) => {
    res.sendFile(
        path.join(__dirname, "pag_integrantes.html")
    );
});

app.get("/albuns", (req,res) => {
    res.sendFile(
        path.join(__dirname, "pag_albuns.html")
    );
});

app.get("/api/integrantes", (req, res) => {
    res.json([
        { nome: "Nayeon",    nacionalidade: "Coreana" },
        { nome: "Jeongyeon", nacionalidade: "Coreana" },
        { nome: "Momo",      nacionalidade: "Japonesa" },
        { nome: "Sana",      nacionalidade: "Japonesa" },
        { nome: "Jihyo",     nacionalidade: "Coreana" },
        { nome: "Mina",      nacionalidade: "Japonesa" },
        { nome: "Dahyun",    nacionalidade: "Coreana" },
        { nome: "Chaeyoung", nacionalidade: "Coreana" },
        { nome: "Tzuyu",     nacionalidade: "Taiwanesa" }
    ]);
});

app.listen(port, () => {               
    console.log(`Example app listening on port ${port}`);
});


