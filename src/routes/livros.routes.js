import express from "express";
import LivrosController from "../controllers/livros.controller.js";

const Controller = new LivrosController();
export default express()
    .get("/", Controller.listarLivros)

    .get("/busca", Controller.listarLivroPorEditora)

    .get("/:id", Controller.getByLivro)

    .post("/", Controller.postLivros)

    .put("/:id", Controller.putLivros)

    .delete("/:id", Controller.deleteLivros);
