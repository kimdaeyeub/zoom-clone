import express from "express";
import http from "http";
import WebSocket, { WebSocketServer } from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (_, res) => {
  res.render("home");
});
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => {
  console.log(`✅서버는 http://localhost:3000 에서 동작중입니다.`);
};

const server = http.createServer(app);
// http를 위한 서버

const wss = new WebSocketServer({ server });
//websocket을 위한 서버
// 안에 http서버를 넣음으로서 server위에 wss서버가 쌓인 형식(?)이라는데 잘 모르겠음.

wss.on("connection", (socket) => {
  socket.on("close", () => {
    console.log("Disconnected from the Browser❌");
  });
  socket.send("Hello!");
});

server.listen(3000, handleListen);
// http와 WebSocket을 다 이해할 수 있는 서버가 되었다.
