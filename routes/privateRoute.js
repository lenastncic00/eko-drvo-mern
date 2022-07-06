const express = require("express");
const router = express.Router();
const { getPrivateRoute } = require("../controllers/private");
const { protect } = require("../middleware/auth");
const User = require('../models/userModel');
//const auth = require("../middleware/auth");

router.route("/").get(protect, getPrivateRoute);


router.get("/getProfile", async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json({
      id: user._id,
      username: user.username
    });
  });


module.exports = router;