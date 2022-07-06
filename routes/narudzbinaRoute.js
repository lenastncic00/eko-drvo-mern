const express = require("express");
const router = express.Router();
const Narudzbina = require('../models/narudzbinaModel');


router.get("/getAllNarudzbina", async(req,res) => {
    try {
        const narudzbinas = await Narudzbina.find({})
        res.send(narudzbinas)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});
 
//625d84b192e5930cf74df337
router.get('/:getOneNarudzbina', function(req, res) {
    let id = req.params._id;
    Narudzbina.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-narudzbina", (req, res, next) => {
    Narudzbina.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

router.put('/update', function(req, res) {
Narudzbina.findByIdAndUpdate(req.body._id, 
{cena_narudzbine:req.body.cena_narudzbine}, function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
        console.log("Data updated!");
    }
});  
});


router.delete("/delete-narudzbina/:id", 
(req, res, next) => {
  Narudzbina.findByIdAndRemove(
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