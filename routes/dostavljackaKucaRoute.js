const express = require("express");
const router = express.Router();
const DostavljackaKuca = require('../models/dostavljackaKucaModel');


router.get("/getAllDostavljackaKuca", async(req,res) => {
    try {
        const dostavljackaKucas = await DostavljackaKuca.find({})
        res.send(dostavljackaKucas)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

//625d605192e5930cf74df2d1
router.get('/:getOneDostavljackaKuca', function(req, res) {
    let id = req.params._id;
    DostavljackaKuca.findOne({id}, 
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

router.delete("/delete-dostavljacka-kuca/:id", 
(req, res, next) => {
  DostavljackaKuca.findByIdAndRemove(
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

/*router.delete('/delete/:id', function(req, res) {
    let id = req.params._id;
    DostavljackaKuca.findByIdAndDelete(id, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
            console.log("Data Deleted!");
        }
    });  
});*/

/*router.delete("/delete/:id", 
(req, res, next) => {
  DostavljackaKuca.findByIdAndRemove(
      req.params._id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});*/

module.exports = router