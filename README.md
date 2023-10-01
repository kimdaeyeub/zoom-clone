# Zoom clone coding

WebRTC와 WebSocket을 사용한 줌 클론 코딩

---

## 프로젝트 setup

### 패키지

1. nodemon

   - nodemon 패키지 설치:`npm i nodemon -D`
   - 역할:

2. babel

   - babel 설치: `npm i @babel/core @babel/cli @babel/node @babel/preset-env -D`

3. express

   - express 설치: `npm i express`

4. pug

- pug 설치: `npm i pug`

5. ws
   - ws설치: `npm i ws`
   - ws: node js Websocket 라이브러리

> `npm i {패키지 이름} -D`에 '-D'의 의미는 devDependencies에 해당 패키지를 추가한다는 의미

---

### 파일 설정

#### nodemon.json

```json
{
  "exec": "babel-node src/server.js"
}
```

#### babel.config.json

```json
{
  "presets": ["@babel/preset-env"]
}
```

#### package.json에 아래 코드 추가

```json
"scripts": {
    "dev": "nodemon"
},
```

#### .gitignore 파일 생성

```
/node_modules
```

---
