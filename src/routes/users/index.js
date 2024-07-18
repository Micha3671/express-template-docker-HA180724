const { Router } = require("express");
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const UserModel = require("../../database/models/UserModel");
const logger = require("../../services/logger/Logger");

const UserRouter = Router();

// GET REQUESTS
UserRouter.get("/currentuser", async (req, res) => {
  const userId = req.user.userId;

  const user = await UserModel.findOne({ where: { id: userId } });
  logger.info("You have a new user", { userId });
  if (!user) {
    res.status(StatusCodes.NOT_FOUND).send(ReasonPhrases.NOT_FOUND);
    return;
  }

  res.status(StatusCodes.OK).json({ user });
});

module.exports = { UserRouter };
