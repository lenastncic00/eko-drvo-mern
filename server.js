require("dotenv").config({ path: "./config.env" });
const express = require('express');
const { required } = require("nodemon/lib/config");
const morgan = require('morgan');
const cookieParser=require('cookie-parser');
const Drvo = require('./models/drvoModel');
const Vozilo = require('./models/voziloModel');
const Korisnik = require('./models/korisnikModel');
const User = require('./models/userModel');
var bodyParser = require('body-parser');
//const errorHandler = require("./middleware/error");

const cors=require("cors");
// Use this after the variable declaration


const app = express();
const db=require('./db.js');
const { post } = require('./routes/drvoRoute');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); 

const corsOptions ={
    origin:["http://localhost:3000"], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions)) 



const drvoRoute = require('./routes/drvoRoute');
const voziloRoute = require('./routes/voziloRoute');
const lokacijaRoute = require('./routes/lokacijaRoute');
const volonterRoute = require('./routes/volonterRoute');
const dostavljackaKucaRoute = require('./routes/dostavljackaKucaRoute');
const narudzbinaRoute = require('./routes/narudzbinaRoute');
const kupacRoute = require('./routes/kupacRoute');
const korisnikRoute = require('./routes/korisnikRoute');
const authRoute = require('./routes/authRoute');
const privateRoute = require('./routes/privateRoute');
const userRoute = require('./routes/userRoute');
const orderRoute = require('./routes/orderRoute');
const error = require('./middleware/error');


app.use('/drvos/', drvoRoute);
app.use('/vozilos/', voziloRoute);
app.use('/lokacijas/', lokacijaRoute);
app.use('/volonters/', volonterRoute);
app.use('/dostavljackaKucas/', dostavljackaKucaRoute);
app.use('/narudzbinas/', narudzbinaRoute);
app.use('/kupacs/', kupacRoute);
app.use('/auth/', authRoute);
app.use('/user/', userRoute);
app.use('/korisniks/', korisnikRoute);
app.use('/private/', privateRoute);
app.use('/orders/', orderRoute);

require("dotenv").config();

app.use(error.errorMiddlewareHandler);

//app.use(errorHandler);

app.get("/", (req, res) => {
    res.send("Server working " + port);
});



app.get("/korpa", async(req,res)=>{
    // const PAGE_SIZE=3;
    // const page=parseInt(req.query.page || "0");
    // const total = await Drvo.countDocuments({});
    // const korpa= await Drvo.find({})
    // .limit(PAGE_SIZE)
    // .skip(PAGE_SIZE*2);
    
    // res.json({
    //     totalPages:Math.ceil(total/PAGE_SIZE),
    //     korpa,
    // });
});

const port = process.env.PORT || 8000;

app.listen(port, ()=> "Server running on port port");