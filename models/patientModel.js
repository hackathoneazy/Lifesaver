const mongoose = require('mongoose');
const patientSchema = mongoose.Schema({
    _id : moongoose.Schema.Types.ObjectId,
    height : {type:Integer,required:true},
    weight : {type:Integer,required:true},
    name : {type:String,required:true},
    gender : {type:String,required:true},
    contact : {type:Integer,required:true},
    location : {type:String,required:true},
    age : {type:Integer,required:true},
    bloodgroup : {type:String,required:true},
    iceone : {type:Integer,required:true},
    icetwo : {type:Integer},
    patienthistory : {type:String},
    prescribed : {type:String}

});

module.exports = mongoose.model('patient',patientSchema);