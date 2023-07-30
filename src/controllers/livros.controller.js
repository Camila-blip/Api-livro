import { livrosModel } from "./models/Livro.model.js";

export default class LivrosController {
    async listarLivros(req, res) {
        try {
            const response = await livrosModel.find().lean();
            return res.status(200).json(response);
        } catch (error) {
            console.log("error", error);
            return res.status(400).send({message: "Erro na consulta do livro"});
        }
    }

    async getByLivro(req, res){
        try {
           const {id} = req.params;
            const response = await livrosModel.findById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send({message: "Erro na consulta do livro"});
        }
    }

    async postLivros(req, res){
        try {
            await livrosModel.create(req.body);
            res.status(200).send({message: "Livro cadastrado com sucesso!"});
        } catch (error) {
            res.status(400).send({message: "Erro ao tentar cadastrar um livro"});
        }
    }

    async putLivros(req, res) {
        try {
            const { id } = req.params;

            livrosModel.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
                if(err){
                    res.status(500).send({message:err.message});
                }else{
                    res.status(200).send({message: "Livro atualizado com sucesso!"});
                }
            });
        } catch (error) {
            res.status(400).send({message: "Erro ao tentar atualizar o livro"});
        }
    }

    async deleteLivros(req, res) {
        try {
            const { id } = req.params;

            livrosModel.findByIdAndDelete(id);

            res.status(200).send(`Livro ${id} removido com sucesso!`);
        } catch (error) {
            console.log("error", error);
            res.status(400).send("Erro put");
        }
    }
}
