import * as express from "express";
import countries from "../../../data/countries.json";

export const countriesRouter = express.Router();

countriesRouter.get("/", function (_, res) {
  res.send(countries);
});
