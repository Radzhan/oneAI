import * as express from "express";
import Card from "../model/Card";

const CardRouter = express.Router();

CardRouter.get("/", async (req, res, next) => {
  try {
    const result = await Card.find();

    return res.send(result);
  } catch (e) {
    return next(e);
  }
});

export default CardRouter;
