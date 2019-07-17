const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routing.js");

const app = express();
app.use("/",routes);

const db = "mongodb://localhost:27017/ngo-event";
const port = process.env.PORT||6000;

mongoose.connect((db,err)=>
{
    if(err)
    {
        console.log("Error! "+err);
    }
    else
    {
        console.log("Connected to mongoDB");
    }
})

app.get("/", (req,res)=>
{
    res.send("Default Route");
})

app.listen(port,()=>console.log(`Listening on port ${port}...`));