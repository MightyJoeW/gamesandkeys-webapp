require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");

//IMPORT CONTROLLERS

//BEGIN SERVER
const app = express();

//SERVE FRONTEND

//INITIALIZE SESSION
app.use(json());

//CONNECT TO DATABASE

// ENDPOINTS

// STRATEGY AND LOGIN

//CONNECTION TEST
app.get("/api/test", (req, res, next) => {
  res.json("Success");
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
