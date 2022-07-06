const express = require("express");
const router = express.Router();
const Kupac = require('../models/kupacModel');


router.get("/getAllKupac", async(req,res) => {
    try {
        const kupacs = await Kupac.find({})
        res.send(kupacs)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/:getOneKupac', function(req, res) {
    let id = req.params._id;
    Kupac.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-kupac", (req, res, next) => {
        Kupac.create(req.body, (error, data) => {
          if (error) {
            return next(error);
          } else {
            console.log(data);
            res.json(data);
          }
        });
      });

router.put('/update', function(req, res) {
    Kupac.findByIdAndUpdate(req.body._id, 
    {ime_kupca:req.body.ime_kupca}, function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data updated!");
        }
    });  
});



  router.delete("/delete-kupac/:id", 
(req, res, next) => {
  Kupac.findByIdAndRemove(
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