import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import "./config/dbConnect.js";
import routes from "./routes/index.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
    console.log(`Port run ${port}`);
});
