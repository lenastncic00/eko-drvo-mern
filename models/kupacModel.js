const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const kupacSchema = mongoose.Schema({
    ime_kupca : {type: String, require},
    prezime_kupca : {type: String, require},
    telefon_kupca : {type: String, require},
    email_kupca : {type: String, require},
    lozinka : {type: String, require},
    grad_kupca : {type: String, require},
    adresa_kupca : {type: String, require}
} , {
    timestamps:true,
});

const kupacModel = mongoose.model('kupacs', kupacSchema)

module.exports=kupacModel