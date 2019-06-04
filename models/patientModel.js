const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    height : {type:Number,required:true},
    weight : {type:Number,required:true},
    email : {type:String,required:true},
    password : {type:String,required:true},
    name : {type:String,required:true},
    gender : {type:String,required:true},
    contact : {type:Number,required:true},
    city : {type:String,required:true},
    age : {type:Number,required:true},
    bloodgroup : {type:String,required:true},
    iceone : {type:Number,required:true},
    icetwo : {type:Number},
    patienthistory : {type:String},
    prescribed : {type:String}

});

module.exports = mongoose.model('patient',patientSchema);