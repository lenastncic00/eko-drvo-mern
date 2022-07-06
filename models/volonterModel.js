const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const volonterSchema = mongoose.Schema({
    profesija : {type: String, require},
    setifikat : {type: Boolean, require}
} , {
    timestamps:true,
});

const volonterModel = mongoose.model('volonters', volonterSchema)

module.exports=volonterModel