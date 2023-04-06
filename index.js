// native node.js :

// const http = require("http");
// const fs = require("fs").promises;

// const manifest = fs.readFileSync('./package.json', 'utf8') // при запуску сервера можна робити синхрон, клієнтам не зашкодить

// const PORT = 8081;

// const requestHendler = (request, response) => {
//   response.writeHead(200, { 'Content-type': 'text/html' }); // head
//   response.end('<h1>Hello!</h1>')  // body
// }

// const requestHendler = async (request, response) => {
//   const manifest = await fs.readFile("./package.json", "utf8");
//   if (request.url.indexOf("/home") >= 0) {
//     // приходить із home
//     response.writeHead(200, { "Content-type": "text/json" }); // head
//     return response.end(manifest); // body
//   }
//   response.writeHead(200, { "Content-type": "text/json" }); // head
//   response.end(JSON.stringify({ a: 1, c: ["hello"] })); // body
// };

// const server = http.createServer(requestHendler);

// server.listen(PORT, (err) => {
//   if (err) {
//     console.error("error at server launch: ", err);
//   }
//   console.log(`Server works at port: ${PORT}`);
// });

// express:

const express = require("express");
const app = express(); // веб-сервер

const PORT = 8081;

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

// щоб запустити сервер:

app.listen(PORT, (err) => {
  if (err) {
    console.error("error at server launch: ", err);
  }
  console.log(`Server works at port: ${PORT}`);
});
