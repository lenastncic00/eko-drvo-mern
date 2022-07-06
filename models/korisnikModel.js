const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const korisnikSchema = mongoose.Schema({
    _id:{type: String, require},
    isAdmin : {type: Boolean, require},
    ime_korisnika : {type: String, require},
    prezime_korisnika : {type: String, require},
    email_korisnika : {type: String, require},
    lozinka_korisnika : {type: String, require},
    telefon_korisnika : {type: String, require}
} , {
    timestamps:true,
});

const korisnikModel = mongoose.model('korisniks', korisnikSchema)

module.exports=korisnikModel