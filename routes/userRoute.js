// const express = require("express");
// const router = express.Router();
// const User = require('../models/userModel');
// const auth = require("../middleware/auth");

// router.get("/getAllUser", async(req,res) => {
//     try {
//         const users = await User.find({})
//         res.send(users)
        
//     } catch (error) {
//         return res.status(400).json({message:error});
//     }
// });

// router.get('/:getOneUser', function(req, res) {
//     let id = req.params._id;
//     User.findOne({id}, 
//     function(err, data) {
//         if(err){
//             console.log(err);
//         }
//         else{
//             res.send(data);
//         }
//     });  
// });




// module.exports = router

const express = require('express')
const User = require('../models/userModel');
const asynchHandler = require('express-async-handler');
const authTokenGenerator = require('../utils/generateToken');

const usersRoute = express.Router();

usersRoute.post('/register', asynchHandler(async (req, res) => {
    
        const {name, email, password, isAdmin} =req.body;

        const userExists = await User.findOne({email: email});

        if(userExists){
            throw new Error('UserExists');
        }

        const userCreated = await User.create({name, email, password, isAdmin});
        if (userCreated) {
            res.status(200);
            res.json({
              _id: userCreated._id,
              name: userCreated.name,
              email: userCreated.email,
              password: userCreated.password,
              isAdmin: userCreated.isAdmin,
              token: authTokenGenerator(userCreated._id),
            });
          }
     //res.send(userCreated);


}));

usersRoute.post('/login', asynchHandler(async (req,res)=>{
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(user && (await user.isPasswordMatch(password))){
        const currentUser = {  
        _id: user._id,
        name: user.name,
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin,
        token: authTokenGenerator(user._id)
    }
        
        res.send(currentUser);
    } else {
        res.status(401);
        throw new Error('Invalid credentials');
    }
}));

usersRoute.get("/getallusers", async (req,res) =>{
    try{
        const users = await User.find({})
        res.status(200).send(users);
    } catch(error){
        res.status(404).json({message: error.stack});
    }
});

usersRoute.post("/deleteuser", async (req,res) =>{
    const userid = req.body.userid;
    try{
        await User.findOneAndDelete({_id: userid})
        res.status(200).send("User deleted");
    } catch(error){
        res.status(404).json({message: error.stack});
    }
});

module.exports=usersRoute;