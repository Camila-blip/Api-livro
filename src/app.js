import express from "express";
import { livroModel } from "./models/Livro.model.js";
const app = express();
app.use(express.json());

app.get("/livros", async (req, res) => {
    try {
        const response = await livroModel.find().lean();
        res.status(200).json(response);
    } catch (error) {
        console.log("error", error);
        res.status(400).send("Erro get livro");
    }
});

app.get("/livros/:id", (req, res) => {
    try {
        const index = buscaLivro(req.params.id);

        res.status(200).json(livroModel[index]);
    } catch (error) {
        console.log("error", error);
        res.status(400).send("Erro get id");
    }
});

app.post("/livros", (req, res) => {
    try {
        livroModel.push(req.body);
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
        livroModel[index].titulo = titulo;

        res.status(200).json(livroModel);
    } catch (error) {
        res.status(400).send("Erro put");
    }
});

app.delete("/livros/:id", (req, res) => {
    try {
        const { id } = req.params;

        const index = buscaLivro(id);
        livroModel.splice(index, 1);

        res.status(200).send(`Livro ${id} removido com sucesso!`);
    } catch (error) {
        console.log("error", error);
        res.status(400).send("Erro put");
    }
});

function buscaLivro(id) {
    try {
        return livroModel.findIndex((livro) => livro.id == id);
    } catch (error) {
        console.log("aqui,erro");
    }
}

export default app;
