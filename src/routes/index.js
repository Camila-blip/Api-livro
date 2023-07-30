import livrosRoutes from "./livros.routes";
const BASE_URL = "/api";

export default function routes(app) {
    app.use("/",((res)=>{
        res.status(200).send("Message: Api Livro");
    }));
    app.use(`${BASE_URL}/livros`, livrosRoutes);
}
