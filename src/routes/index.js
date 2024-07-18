const { Router } = require("express");
const { TodosRouter } = require("./todos");
const { AuthRouter } = require("./auth");
const { UserRouter } = require("./users");
const authMiddleWare = require("../middlewares/authMiddleware");
const logger = require("../services/logger/Logger");

const AppRouter = Router();

AppRouter.use("/auth", AuthRouter);
AppRouter.use("/users", authMiddleWare, UserRouter);
AppRouter.use("/todos", TodosRouter);
AppRouter.get("/test", (req, res) => {
  console.log("Hello World");
  logger.error("Hello World");
  res.json({ myLogLevel: process.env.LOG_LEVEL });
});
module.exports = { AppRouter };
