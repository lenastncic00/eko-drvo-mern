const crypto = require("crypto");
const  mongoose  = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
    name: {
      type: String,
     // required: [true, "Please provide username"],
    },
    email: {
      type: String,
     // required: [true, "Please provide email address"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: 6
    }, 
    isAdmin : {
        type: Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
  }, {timestamps: true});


  userSchema.pre('save', async function (next) {
    //We only want to do this if the password is sent or modified, this is because when a user later update their password this will run and the user cannot login
    if (!this.isModified('password')) {
      next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  //Verify password for login
  //Methods: Apply to an instance of this model
  userSchema.methods.isPasswordMatch = async function (password) {
    return await bcrypt.compare(password, this.password);
  };


  // userSchema.pre("save", async function (next) {
  //   if (!this.isModified("password")) {
  //     next();
  //   }
  
  //   const salt = await bcrypt.genSalt(10);
  //   this.password = await bcrypt.hash(this.password, salt);
  //   next();
  // });

  // userSchema.methods.matchPassword = async function (password) {
  //   return await bcrypt.compare(password, this.password);
  // };

  // userSchema.methods.getSignedJwtToken = function () {
  //   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
  //     expiresIn: process.env.JWT_EXPIRE,
  //   });
  // };

  // userSchema.methods.getResetPasswordToken = function () {
  //   const resetToken = crypto.randomBytes(20).toString("hex");
  
  //   // Hash token (private key) and save to database
  //   this.resetPasswordToken = crypto
  //     .createHash("sha256")
  //     .update(resetToken)
  //     .digest("hex");
  
  //   // Set token expire date
  //   this.resetPasswordExpire = Date.now() + 10 * (60 * 1000); // Ten Minutes
  
  //   return resetToken;
  // };
  

const userModel = mongoose.model('users', userSchema)

module.exports=userModel