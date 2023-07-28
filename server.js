import "dotenv/config";
import app from "./src/app.js";
import bodyParser from "body-parser";
import "./src/config/dbConnect.js";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
console.log("process.env.PORT", process.env.PORT);
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Port run ${port}`);
});
