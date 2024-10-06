const express = require("express");
const app = express();
const PORT =  process.env.PORT || 3030;
require('dotenv').config();
require("./db");

app.get("/",(req,res)=>{
    return res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log("Server started running");
});