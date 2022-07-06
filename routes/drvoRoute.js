const express = require("express");
const router = express.Router();
const Drvo = require('../models/drvoModel');


router.get("/getAllDrvo", async(req,res) => {
    try {
        const drvos = await Drvo.find({})
        res.send(drvos)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/:getOneDrvo', function(req, res) {
    let id = req.params._id;
    Drvo.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});


router.post("/create-drvo", (req, res, next) => {
    Drvo.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

router.put('/update', function(req, res) {
Drvo.findByIdAndUpdate(req.body._id, 
{cena_drveta:req.body.cena_drveta}, function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
        console.log("Data updated!");
    }
});  
});

router.delete("/delete-drvo/:id", 
(req, res, next) => {
  Drvo.findByIdAndRemove(
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