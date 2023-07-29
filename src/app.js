import express from "express";
import { livrosModel } from "./models/Livro.model.js";
import LivrosController from "./controllers/livros.controller.js";
const app = express();
app.use(express.json());

app.get("/livros", async (req, res) => {
    listarLivros();
});

app.get("/livros/:id", (req, res) => {
    try {
        const index = buscaLivro(req.params.id);

        res.status(200).json(livrosModel[index]);
    } catch (error) {
        console.log("error", error);
        res.status(400).send("Erro get id");
    }
});

app.post("/livros", (req, res) => {
    try {
        livrosModel.push(req.body);
        res.status(200).send("Livro foi cadastrado com sucesso");
    } catch (error) {
        res.status(400).send("Erro post");
    }
});

app.put("/livros/:id", (req, res) => {
    try {
        const { id } = req.params;
        const { titulo } = req.body;

        const index = buscaLivro(id);
        livrosModel[index].titulo = titulo;

        res.status(200).json(livrosModel);
    } catch (error) {
        res.status(400).send("Erro put");
    }
});

app.delete("/livros/:id", (req, res) => {
    try {
        const { id } = req.params;

        const index = buscaLivro(id);
        livrosModel.splice(index, 1);

        res.status(200).send(`Livro ${id} removido com sucesso!`);
    } catch (error) {
        console.log("error", error);
        res.status(400).send("Erro put");
    }
});

function buscaLivro(id) {
    try {
        return livrosModel.findIndex((livro) => livro.id == id);
    } catch (error) {
        console.log("aqui,erro");
    }
}

export default app;
