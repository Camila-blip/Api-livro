import mongoose from "mongoose";
const autorSchema = new mongoose.Schema(
    {
        id: {
            type: String,
        },
        nome: {
            type: String,
            required: true,
        },
        nacionalidade: {
            type: String,
        },
    },
    {
        versionKey: false,
    }
);

export const autoresModel = mongoose.model("autores", autorSchema);
