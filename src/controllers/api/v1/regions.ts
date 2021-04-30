import * as express from "express";
import regions from "../../../data/regions.json";

export const regionsRouter = express.Router();

regionsRouter.get("/", function (_, res) {
  res.send(regions);
});
