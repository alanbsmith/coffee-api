import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { coffeeRouter } from "./controllers/api/v1/coffee";
import { countriesRouter } from "./controllers/api/v1/countries";
import { regionsRouter } from "./controllers/api/v1/regions";
import { subregionsRouter } from "./controllers/api/v1/subregions";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/v1/coffee", coffeeRouter);
app.use("/api/v1/countries", countriesRouter);
app.use("/api/v1/regions", regionsRouter);
app.use("/api/v1/subregions", subregionsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
