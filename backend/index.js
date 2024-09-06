const express = require("express");

const db = require("./queries");
const port = 8000;
const cors = require("cors");

const app = express();

// CORS middleware
const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `https://hf4yvp-5173.csb.app/`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `Content-Type`);
  next();
};

app.use(allowCrossDomain);

app.use(cors());
console.log(app);

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.get("/test", db.getAllInfo);

// Catch all
app.get("*", (req, res) => {
  res.send("This is not a valid endpoint.");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
