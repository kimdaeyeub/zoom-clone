# Server.js

```js
import express from "express";

const app = express();

app.set("view engine", "pug");
// pug로 화면에 나타내겠다는 의미
app.set("views", __dirname + "/views");
// pug로 만든 파일들이 존재하는 위치를 나타냄
app.use("/public", express.static(__dirname + "/public"));
// 미들웨어로서 해당 url에 접근시 정적 파일을 제공함을 의미
// public폴더를 유저에게 제공
app.get("/*", (req, res) => res.redirect("/"));
// '/'url말고 이외의 url로 접근할려하면 '/'로 리다이렉트 시킨다.
//리다이렉트는 해당 주소로 강제로 이동시키는 것이라고 생각해도됨.

app.get("/", (req, res) => {
  res.render("home");
});

const handleListen = () => {
  console.log(`✅서버는 http://localhost:8000 에서 동작중입니다.`);
};

app.listen(8000, handleListen);
```
