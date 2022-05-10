const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const voziloSchema = mongoose.Schema({
    tip_vozila : {type: String, require},
    zauzeto : {type: Boolean, require}
} , {
    timestamps:true,
});

const voziloModel = mongoose.model('vozilos', voziloSchema)

module.exports=voziloModel


