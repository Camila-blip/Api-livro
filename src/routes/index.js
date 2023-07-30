import livrosRoutes from "./livros.routes.js";
import autoresRoute from "./autores.routes.js";

const BASE_URL = "/api";

export default function routes(app) {
    app.use(`${BASE_URL}/livros`, livrosRoutes);

    app.use(`${BASE_URL}/autor`, autoresRoute);

    app.use("/", (req, res) => {
        res.status(200).send({ Message: "Api Livro" });
    });
}
