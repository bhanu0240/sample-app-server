const express = require("express");
const app = express();
const PORT = 3030;

app.get("/",(req,res)=>{
    return res.send("Hello World");
});

app.listen(PORT,()=>{
    console.log("Server started running at "+PORT);
});