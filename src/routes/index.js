import livrosRoutes from "./livros.routes";
const BASE_URL = "/api";

export default function routes(app) {
    app.use(`${BASE_URL}/livros`, livrosRoutes);
}
