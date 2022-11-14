import express from "express";
import bodyParser from "body-parser";
import { router } from "./routes/routes";
import cors from "cors";

const PORT = process.env.PORT || 3500;

export const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use("/api/v1", router);

app.listen(PORT, () => console.log(`Server started at ${PORT}`));
