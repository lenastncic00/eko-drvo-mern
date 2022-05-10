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

module.exports = router