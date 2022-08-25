import express from "express";
import next from "next";
import mysql from "mysql";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port: number = Number(process.env.PORT) || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

if (dev) {
  require("dotenv").config();
}

console.log("\ndev: ", dev);
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);
console.log("process.env.HOST: ", process.env.DB_HOST);
console.log("process.env.USER: ", process.env.DB_USER);
console.log("process.env.PASSWORD: ", process.env.DB_PASSWORD);
console.log("process.env.DB: ", process.env.DB);
console.log("process.env.DB_PORT: ", process.env.DB_PORT);
console.log("\n");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: Number(process.env.DB_PORT),
  debug: false,
});

app.prepare().then(() => {
  const server = express();
  server.use(express.static("_next"));
  server.use(express.static("../pages"));
  server.all("/_next/*", (req, res) => handle(req, res));

  server.get("/users/:id", (req: { params: { id: number } }, res) => {
    pool.query(
      `Select * from participants where id = ${req.params?.id}`,
      (err: any, data: any) => {
        if (err) {
          console.error(err);
          return;
        }
        res.json(data);
      }
    );
  });

  server.get("/users", (req: { query: { name: string } }, res) => {
    if (req.query?.name) {
      pool.query(
        `Select * from participants where name like '%${req.query?.name}%'`,
        (err: any, data: any) => {
          if (err) {
            console.error(err);
            return;
          }
          res.json(data);
        }
      );
    } else {
      pool.query("SELECT * FROM participants", (err: any, data: any) => {
        if (err) {
          console.error(err);
          return;
        }
        res.json(data);
      });
    }
  });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
