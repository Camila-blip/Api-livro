import express from "express";
import LivrosController from "../controllers/livros.controller";

const Controller = new LivrosController();

export default express()
    .get("/autores", Controller.listarAutores())

    .get("/autores/:id", Controller.getByAutor())

    .post("/autores", Controller.postAutores())

    .put("/autores/:id", Controller.putAutores())

    .delete("/autores/:id", Controller.deleteAutores());
