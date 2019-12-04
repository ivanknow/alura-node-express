const express = require("express");

const app = express();

app.listen(3000, () => console.log("ta rondando mlk"));

app.get("/atendimentos",(req,res) => {res.send("bagui ta loko 2")})
