const express = require("express");
const router = express.Router();
const Vozilo = require('../models/voziloModel');


router.get("/getAllVozilo", async(req,res) => {
    try {
        const vozilos = await Vozilo.find({})
        res.send(vozilos)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

//625dbb2b92e5930cf74df36f
router.get('/:getOneVozilo', function(req, res) {
    let id = req.params._id;
    Vozilo.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-vozilo", (req, res, next) => {
    Vozilo.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

router.put('/update', function(req, res) {
Vozilo.findByIdAndUpdate(req.body._id, 
{tip_vozila:req.body.tip_vozila}, function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
        console.log("Data updated!");
    }
});  
});

router.delete("/delete-vozilo/:id", 
(req, res, next) => {
  Vozilo.findByIdAndRemove(
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