const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routing.js");
//const cors = require('cors');

const app = express();

//app.use(cors()); 

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    next();
  });

app.use("/",routes);

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

// mongoose.connect(db, err=>
// {
//     if(err)
//     {
//         console.log("Error! "+err);
//     }
//     else
//     {
//         console.log("Connected to mongoDB");
//     }
// });

app.get("/", (req,res)=>
{
    res.send("Default Route");
})

app.listen(port,()=>console.log(`Listening on port ${port}...`));

