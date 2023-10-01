import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/*", (req, res) => res.redirect("/"));

app.get("/", (req, res) => {
  res.render("home");
});

const handleListen = () => {
  console.log(`✅서버는 http://localhost:8000 에서 동작중입니다.`);
};

app.listen(8000, handleListen);
