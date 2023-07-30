import { livrosModel } from "../models/Livro.model.js";

export default class LivrosController {
    async listarLivros(req, res) {
        try {
            const response = await livrosModel.find().populate("autor");
            return res.status(200).json(response);
        } catch (error) {
            console.log("error", error);
            return res
                .status(400)
                .send({ message: "Erro na consulta do livro" });
        }
    }

    async getByLivro(req, res) {
        try {
            const { id } = req.params;
            const response = await livrosModel
                .findById(id)
                .populate("autor", "nome");
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send({ message: "Erro na consulta do livro" });
        }
    }

    async postLivros(req, res) {
        try {
            await livrosModel.create(req.body);
            res.status(200).send({ message: "Livro cadastrado com sucesso!" });
        } catch (error) {
            res.status(400).send({
                message: "Erro ao tentar cadastrar um livro",
            });
        }
    }

    async putLivros(req, res) {
        try {
            const { id } = req.params;

            await livrosModel.findByIdAndUpdate(id, { $set: req.body });

            res.status(200).send({
                message: "Livro atualizado com sucesso!",
            });
        } catch (error) {
            res.status(400).send({
                message: "Erro ao tentar atualizar o livro",
            });
        }
    }

    async deleteLivros(req, res) {
        try {
            const { id } = req.params;

            await livrosModel.findByIdAndDelete(id);

            res.status(200).send({
                message: `Livro ${id} removido com sucesso!`,
            });
        } catch (error) {
            console.log("error", error);
            res.status(400).send({
                message: "Erro ao tentar deletar o livro",
            });
        }
    }

    async listarLivroPorEditora(req, res) {
        try {
            const { editora } = req.query;
            const response = await livrosModel.find({ editora: editora });
            res.status(200).json(response);
        } catch {
            res.status(400).send({
                message: "Erro ao tentar buscar editora",
            });
        }
    }
}
