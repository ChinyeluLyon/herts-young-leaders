import express from "express";
import next from "next";
import mysql from "mysql";
import bodyParser from "body-parser";
import { Sequelize, DataTypes, Op } from "sequelize";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port: number = Number(process.env.PORT) || 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

if (dev) {
  require("dotenv").config();
}

const sequelize = new Sequelize(
  process.env.DB || "",
  process.env.DB_USER || "",
  process.env.DB_PASSWORD || "",
  {
    host: process.env.DB_HOST || "",
    dialect: "mysql",
  }
);

type User = {
  id: number;
  created_at: string;
  name: string;
  age: number;
  am: number;
  pm: number;
};

const ParticipantModel = sequelize.define(
  "participants",
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    am: {
      type: DataTypes.NUMBER,
    },
    pm: {
      type: DataTypes.NUMBER,
    },
  },
  { underscored: true, timestamps: false }
);

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

const jsonParser = bodyParser.json();

app.prepare().then(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }

  const server = express();
  server.use(express.static("_next"));
  server.use(express.static("../pages"));
  server.all("/_next/*", (req, res) => handle(req, res));

  // CRUD
  // Create user
  server.post("/users", jsonParser, (req: ParticipantPostRequest, res) => {
    const errorMessage: Array<string> = [];
    if (!req.body) {
      errorMessage.push("Error: Invalid body");
    }
    if (!req.body.age) {
      errorMessage.push("Error: Needs an age");
    }
    if (!req.body.name) {
      errorMessage.push("Error: Needs a name");
    }
    if (errorMessage.length > 0) {
      res.status(400).send(errorMessage.join("\n"));
    }

    pool.query(
      `INSERT INTO participants (name, age) VALUES ("${req.body.name}", "${req.body.age}");`,
      (err: any, data: any) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json(data);
      }
    );
  });

  // Update user
  server.post(
    "/users/:id",
    jsonParser,
    (req: ParticipantUpdateRequest, res) => {
      const errorMessage: Array<string> = [];
      if (!req.params) {
        errorMessage.push("Error: Invalid params");
      }
      if (!req.params.id) {
        errorMessage.push("Error: Needs an id");
      }
      if (errorMessage.length > 0) {
        res.status(400).send(errorMessage.join("\n"));
      }

      pool.query(
        `UPDATE participants SET name='${req.body?.name}', age='${req.body?.age}' WHERE id=${req.params?.id};`,
        (err: any, data: any) => {
          if (err) {
            res.status(500).send(err);
          }
          if (data?.changedRows === 0) {
            res.send("No user with that id");
          }
          res.json(data);
        }
      );
    }
  );

  // Get user by id
  server.get("/users/:id", (req: ParticipantRequestById, res) => {
    const errorMessage: Array<string> = [];
    if (!req.params) {
      errorMessage.push("Error: Invalid params");
    }
    if (!req.params.id) {
      errorMessage.push("Error: Needs an id");
    }
    if (errorMessage.length > 0) {
      res.status(400).send(errorMessage.join("\n"));
    }

    pool.query(
      `Select * from participants where id = ${req.params?.id}`,
      (err: any, data: any) => {
        if (err) {
          res.status(500).send(err);
        }
        res.json(data);
      }
    );
    // res.json([{ devTest: req.params }]);
  });

  // Get users
  server.get("/users", async (req: ParticipantRequest, res) => {
    try {
      if (req.query) {
        let tempParams: {
          name?: any;
          age?: number | undefined;
        } = req.query;

        if (tempParams.name) {
          tempParams = {
            ...tempParams,
            name: {
              [Op.like]: `${req.query.name}%`,
            },
          };
        }

        const params = {
          where: tempParams,
        };

        const ptcpnt = await ParticipantModel.findAll(params);
        res.json(ptcpnt);
      } else {
        const ptcpnt = await ParticipantModel.findAll();
        res.json(ptcpnt);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  });
  // server.get("/users", (req: ParticipantRequest, res) => {
  //   let queryString = "SELECT * FROM participants";
  //   if (req.query) {
  //     let extraQuery = "";
  //     if (req.query.name) {
  //       extraQuery = `where name like '${req.query?.name}%'`;
  //     }
  //     if (req.query.age) {
  //       const test = req.query.name ? `${extraQuery} AND ` : "where ";
  //       extraQuery = `${test}age = ${req.query?.age}`;
  //     }
  //     queryString = `${queryString} ${extraQuery}`;
  //   }
  //   console.log(queryString);

  //   pool.query(queryString, (err: any, data: User) => {
  //     if (err) {
  //       res.status(500).send(err);
  //     }
  //     res.json(data);
  //   });
  // });

  server.all("*", (req, res) => handle(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
