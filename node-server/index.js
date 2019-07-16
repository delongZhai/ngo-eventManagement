const express = require("express");
const mongoose = require("mongoose");
//const routes = require("./routes/routes.js");

const app = express();
//app.use("/",routes);

const db = "mongodb://localhost:27017/ngo-event"
const port = process.env.PORT||7000;

mongoose.connect(db,err=>
{
    if(err)
    {
        console.log("Error! "+err);
    }
    else
    {
        console.log("Connected to mongoDB")
    }
})

app.get("/",(req,res)=>
{
    res.send("Default Route");
})

<<<<<<< HEAD
app.listen(port,()=>console.log(`Listening on port ${port}...`));
=======
app.listen(port,()=>console.log(`Listening on port ${port}...`));
>>>>>>> b4f42391efbf64e8cded62e2ab1bcacdc112ab47
