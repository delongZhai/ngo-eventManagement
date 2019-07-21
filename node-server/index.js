const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routing.js");

const app = express();
<<<<<<< HEAD

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app.use("/",routes);
=======
app.use("/api",routes);
>>>>>>> bc98832e6b85ca761f2e7506acbb21454d7b1f97

const db = "mongodb://localhost:27017/ngo-event";
const port = process.env.PORT||7000;

mongoose.connect(db, { 
    useFindAndModify: false,
    useNewUrlParser: true 
}, err=>{
        if(err) { console.log("Error! "+err); }
        else { console.log("Connected to mongoDB"); }
    }
);

app.get("/", (req,res)=>
{
    res.send("Default Route");
})

app.listen(port,()=>console.log(`Listening on port ${port}...`));

