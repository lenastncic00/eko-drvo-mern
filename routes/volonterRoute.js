const express = require("express");
const router = express.Router();
const Volonter = require('../models/volonterModel');


router.get("/getAllVolonter", async(req,res) => {
    try {
        const volonters = await Volonter.find({})
        res.send(volonters)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/:getOneVolonter', function(req, res) {
    let id = req.params._id;
    Volonter.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-volonter", (req, res, next) => {
    Volonter.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

  router.put('/update', function(req, res) {
   Volonter.findByIdAndUpdate(req.body._id, 
    {profesija:req.body.profesija}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
    });

    router.delete("/delete-volonter/:id", 
(req, res, next) => {
  Volonter.findByIdAndRemove(
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