const  mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const drvoSchema = mongoose.Schema({
    vrsta_drveta : {type: String, required: true},
    ime_drveta : [] ,
    cena_drveta : [] ,
    opis : {type: String, required: true}
} , {
    timestamps:true,
});

const drvoModel = mongoose.model('drvos', drvoSchema);
module.exports=drvoModel;

/*var drvoModel = mongoose.model("drvoModel", drvoSchema, "drvos");

drvoModel.find({}, function(docs){
    console.log(docs);
 });*/



