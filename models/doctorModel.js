const mongoose=require('mongoose');

const doctorSchema= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type:String,required:true},
    degree: {type:String,required:true},
    email: {type:String,required:true},
    password: {type:String,required:true},
    experience: {type:Number,required:true},
    speciality: {type:String,required:true},
    clinic: {type:String,required:true},
    city: {type:String,required:true},
    rating: {type:Number,default:0},
    service: {type:String},
    gender: {type:Number,required:true},
    college: {type:String,required:true},
    contact: {type:Number,required:true},
    year_of_completion: {type:String},
    type_of_clinic: {type:String},
    medical_license_number: {type:String,required:true},
    description: {type:String}
});

module.exports=mongoose.model('doctor',doctorSchema);