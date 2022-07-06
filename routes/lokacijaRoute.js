const express = require("express");
const router = express.Router();
const Lokacija = require('../models/lokacijaModel');


router.get("/getAllLokacija", async(req,res) => {
    try {
        const lokacijas = await Lokacija.find({})
        res.send(lokacijas)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/:getOneLokacija', function(req, res) {
    let id = req.params._id;
    Lokacija.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-lokacija", (req, res, next) => {
    Lokacija.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

router.put('/update', function(req, res) {
Lokacija.findByIdAndUpdate(req.body._id, 
{region:req.body.region}, function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
        console.log("Data updated!");
    }
});  
});


router.delete("/delete-lokacija/:id", 
(req, res, next) => {
  Lokacija.findByIdAndRemove(
      req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});


module.exports = router