import { livrosModel } from "./models/Livro.model.js";

export default class LivrosController {
    async listarLivros(req, res) {
        try {
            const response = await livrosModel.find().lean();
            return res.status(200).json(response);
        } catch (error) {
            console.log("error", error);
            return res.status(400).send("Erro get livro");
        }
    }

    async deleteLivros(req, res) {
        try {
            const { id } = req.params;

            const index = livrosModel(id);
            livrosModel.splice(index, 1);

            res.status(200).send(`Livro ${id} removido com sucesso!`);
        } catch (error) {
            console.log("error", error);
            res.status(400).send("Erro put");
        }
    }
}
