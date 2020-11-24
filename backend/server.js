import express from "express";
import data from './data.js';

const app = express();

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("server is ready .........");
});

app.listen(5000, (req, res) => {
  console.log("server at http://localhost:5000");
});
