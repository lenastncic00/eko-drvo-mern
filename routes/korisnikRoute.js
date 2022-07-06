const express = require("express");
const router = express.Router();
const Korisnik = require('../models/korisnikModel');


router.get("/getAllKorisnik", async(req,res) => {
    try {
        const korisniks = await Korisnik.find({})
        res.send(korisniks)
        
    } catch (error) {
        return res.status(400).json({message:error});
    }
});

router.get('/:getOneKorisnik', function(req, res) {
    let id = req.params._id;
    Korisnik.findOne({id}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.post("/create-korisnik", (req, res, next) => {
    Korisnik.create(req.body, (error, data) => {
      if (error) {
        return next(error);
      } else {
        console.log(data);
        res.json(data);
      }
    });
  });

router.put('/update', function(req, res) {
Korisnik.findByIdAndUpdate(req.body._id, 
{ime_korisnika:req.body.ime_korisnika}, function(err, data) {
    if(err){
        console.log(err);
    }
    else{
        res.send(data);
        console.log("Data updated!");
    }
});  
});

router.delete("/delete-korisnik/:id", 
(req, res, next) => {
  Korisnik.findByIdAndRemove(
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