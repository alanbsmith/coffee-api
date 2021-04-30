import * as express from "express";
import coffee from "../../../data/coffee.json";

export const coffeeRouter = express.Router();

coffeeRouter.get("/", function (_, res) {
  res.send(coffee);
});
