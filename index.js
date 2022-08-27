const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const service = require("./service/cliente");

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/",service);

app.listen(3000,()=>{
    console.log("app rodando")
});