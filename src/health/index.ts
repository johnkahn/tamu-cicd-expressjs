import express from "express";

export const health = express.Router();

health.get("/", (_req, res) => {
  res.send("All systems nominal 🚀");
});

health.post("/", (_req, res) => {
  res.send("DON'T TELL ME HOW TO FEEL!");
});
