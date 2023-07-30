import { autoresModel } from "./models/auto.model.js";

export default class AutorController {
    async listarAutores(req, res) {
        try {
            const response = await autoresModel.find().lean();
            return res.status(200).json(response);
        } catch (error) {
            console.log("error", error);
            return res.status(400).send({message: "Erro na consulta do autor"});
        }
    }

    async getByAutor(req, res){
        try {
           const {id} = req.params;
            const response = await autoresModel.findById(id);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).send({message: "Erro na consulta do autor"});
        }
    }

    async postAutores(req, res){
        try {
            await autoresModel.create(req.body);
            res.status(200).send({message: "Autor cadastrado com sucesso!"});
        } catch (error) {
            res.status(400).send({message: "Erro ao tentar cadastrar um autor"});
        }
    }

    async putAutores(req, res) {
        try {
            const { id } = req.params;

            autoresModel.findByIdAndUpdate(id,{$set: req.body}, (err)=>{
                if(err){
                    res.status(500).send({message:err.message});
                }else{
                    res.status(200).send({message: "Autor atualizado com sucesso!"});
                }
            });
        } catch (error) {
            res.status(400).send({message: "Erro ao tentar atualizar o autor"});
        }
    }

    async deleteAutores(req, res) {
        try {
            const { id } = req.params;

            autoresModel.findByIdAndDelete(id);

            res.status(200).send(`Autor ${id} removido com sucesso!`);
        } catch (error) {
            console.log("error", error);
            res.status(400).send("Erro put");
        }
    }
}
