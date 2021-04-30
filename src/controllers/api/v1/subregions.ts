import * as express from "express";
import subregions from "../../../data/subregions.json";

export const subregionsRouter = express.Router();

subregionsRouter.get("/", function (_, res) {
  res.send(subregions);
});
