import express from "express";
import http from "http";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import cors from "cors";
import responseLogMiddleware from "./middlewares/responseLog";

import HelloController from "./controllers/hello.controller";
import ConnectionSocket from "./sockets/connection.socket";

// ENV VARIABLES
const PORT = process.env.PORT || 5000;

const app = express();
const router = express.Router();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["*"],
  },
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(responseLogMiddleware);

// API calls
app.use(HelloController(router));

// IO connection
ConnectionSocket(io);

router.all("*", (req, res, next) => {
  res.status(400).send({ message: "Bad request" });
});

server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
