const express = require('express');
const { required } = require("nodemon/lib/config");
const morgan = require('morgan');

const Drvo = require('./models/drvoModel');

const Vozilo = require('./models/voziloModel');


const app = express();
const drvoRoute = require('./routes/drvoRoute');

const db=require('./db.js');

app.use(express.json());

app.use('/api/drvos/', drvoRoute);

app.get("/", (req, res) => {
    res.send("Server working " + port);
});

/*app.get('/getdrvo',(req,res)=>{
     Drvo.find().then(docs=>{
        console.log(docs);
        res.send(docs)
    }).catch(err=>{
        console.log(err);
    })
})*/

app.get('/getvozilo',(req,res)=>{

    Vozilo.find().then(docs=>{
        console.log(docs);
        res.status(200).json(docs)
    }).catch(err=>{
        console.log(err);
    })
})


const port = process.env.PORT || 8000;

app.listen(port, ()=> "Server running on port port");