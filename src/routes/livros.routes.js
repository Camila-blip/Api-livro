import express from "express";
import LivrosController from "../controllers/livros.controller";

const Controller = new LivrosController();

export default express()
    .get("/livros", Controller.listarLivros())

    .get("/livros/:id", Controller.getByLivro())

    .post("/livros", Controller.postLivros())

    .put("/livros/:id", Controller.putLivros())

    .delete("/livros/:id", Controller.deleteLivros());
