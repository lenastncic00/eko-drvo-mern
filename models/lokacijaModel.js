const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const lokacijaSchema = mongoose.Schema({
    region : {type: String, require},
    opstina : []
} , {
    timestamps:true,
});

const lokacijaModel = mongoose.model('lokacijas', lokacijaSchema)

module.exports=lokacijaModel

