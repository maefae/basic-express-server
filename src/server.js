"use strict";

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3003;
const logger = require("./middleware/logger");
const validator = require("./middleware/validator");
const notFound = require("./error-handlers/404");
const errorHandler = require("./error-handlers/500");

const app = express();
app.use(cors());
app.use(express.json());

//routes
app.get("/", logger, (req, res, next) => {
  res.status(200).send("Basic Express Server says hello!");
});

app.get("/person", validator, (req, res, next) => {
  res.status(200).send({ name: req.query.name });
});

app.use("*", notFound);
app.use(errorHandler);

const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}.`);
  });
};

module.exports = {
  start: startServer,
  app: app,
};
