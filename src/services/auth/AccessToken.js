const jwt = require("jsonwebtoken");

const { JWT_SECRET } = process.env;

function createAccessToken(userId) {
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });

  return accessToken;
}

function decodeAccessToken(accessToken) {
  const decodedToken = jwt.verify(accessToken, JWT_SECRET);

  return decodedToken;
}

module.exports = { createAccessToken, decodeAccessToken };
