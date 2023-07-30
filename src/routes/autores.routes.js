import express from "express";
import AutoresController from "../controllers/autores.controller.js";

const Controller = new AutoresController();

export default express()
    .get("/", Controller.listarAutores)

    .get("/:id", Controller.getByAutor)

    .post("/", Controller.postAutores)

    .put("/:id", Controller.putAutores)

    .delete("/:id", Controller.deleteAutores);
