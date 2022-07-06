const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const narudzbinaSchema = mongoose.Schema({
    cena_narudzbine : {type: Number, require}
} , {
    timestamps:true,
});

const narudzbinaModel = mongoose.model('narudzbinas', narudzbinaSchema)

module.exports=narudzbinaModel
