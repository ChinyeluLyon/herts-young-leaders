// server.js
const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const mysql = require("mysql");

if (dev) {
  require("dotenv").config();
}

console.log("\ndev: ", dev);
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
// console.log("process.env.HOST: ", process.env.HOST);
// console.log("process.env.USER: ", process.env.USER);
// console.log("process.env.PASSWORD: ", process.env.PASSWORD);
// console.log("process.env.DB: ", process.env.DB);
// console.log("process.env.PORT: ", process.env.PORT);
console.log("\n");

// const connection = mysql.createConnection({
//   host: process.env.HOST,
//   user: process.env.USER,
//   password: process.env.PASSWORD,
//   database: process.env.DB,
//   port: process.env.PORT,
// });

// connection.connect();

app.prepare().then(() => {
  const server = express();
  server.use(express.static("_next"));
  server.use(express.static("../pages"));
  server.all("/_next/*", (req, res) => handle(req, res));

  server.get("/users", (req, res) => {
    res.json({ x: "Hello World!" });
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });

  // createServer(async (req, res) => {
  //   try {
  //     // Be sure to pass `true` as the second argument to `url.parse`.
  //     // This tells it to parse the query portion of the URL.
  //     const parsedUrl = parse(req.url, true);
  //     const { pathname, query } = parsedUrl;
  //     console.log("query: ", query);
  //     console.log("pathname: ", pathname);

  //     if (pathname === "/users" && req.method === "GET") {
  //       console.log("Start Query");
  //       // console.log("connection: ", connection);

  //       connection.query("SELECT * FROM participants;", (err, rows, fields) => {
  //         if (err) throw err;

  //         console.log("rows: ", rows);
  //         res.send("test");
  //       });

  //       // await app.render(req, res, "/", query);
  //     } else {
  //       await handle(req, res, parsedUrl);
  //     }
  //   } catch (err) {
  //     console.error("Error occurred handling", req.url, err);
  //     res.statusCode = 500;
  //     res.end("internal server error");
  //   }
  // }).listen(port, (err) => {
  //   if (err) throw err;
  //   console.log(`> Ready on http://${hostname}:${port}`);
  // });
});
