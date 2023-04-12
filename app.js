const express = require("express");
require("dotenv").config();
// const authRouter = require("./routes/api/auth");

const app = express(); // веб-сервер

// app.use("/api/auth", authRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // для парсингу html форм
app.use(express.static("public")); // для публічних директорій

app.use((req, res, next) => {
  // res.status(500).json({ javascript: "object" });
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

// app.get('/home', (req, res) => {
//   res.sendStatus(200);
//   // res.status(500).json({ javascript: 'object' });
// })

// app.use () для всіх видів відповідей

app.post("/home", (req, res) => {
  if (!req.body.test) {
    return res.status(400).json({ status: "test is required!" });
  }
  console.log(req.body);
  // res.status(500).json({ javascript: "object" });
  // res.sendStatus(200);
  res.json({ javascript: "object", body: req.body });
});


module.exports = {
  app,
}
