const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const dostavljackaKucaSchema = mongoose.Schema({
    naziv_dostavljacke_kuce : {type: String, require},
    cena_usluge_dostavljacke_kuce : {type: Number, require}
} , {
    timestamps:true,
});

const dostavljackaKucaModel = mongoose.model('dostavljacka_kucas', dostavljackaKucaSchema)

module.exports=dostavljackaKucaModel