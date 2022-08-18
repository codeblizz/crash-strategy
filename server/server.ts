import express from "express";
import { Server } from "socket.io";
import config from "./config";
import cors from "cors";
import http from "http";
import placeBet from "./routes/bet";

const { PORT } = config;

const app = express();
const httpServer = http.createServer(app)
app.use(cors());

const wsSocket = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

wsSocket.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        wsSocket.emit("chat message", msg);
    })
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
    })
})

app.use("/", placeBet);

const start = () => {
    httpServer.listen(PORT, () => {
        console.log(`Server started successfully on port ${PORT}`)
    })
}

start();