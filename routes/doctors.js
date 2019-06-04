const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const doctorModel=require('../models/doctorModel');


router.get('/',function(req,res){
    // res.send("Doctor's Home").status(200);
    doctorModel.find()
    .exec()
    .then(docData=>{
    
        res.json(docData).status(200)
    })
});
   

router.post('/',function(req,res){
    const newData= new doctorModel({
        _id: new mongoose.Types.ObjectId(),
        name :req.body.name,
        degree: req.body.degree,
        email: req.body.degree,
        speciality: req.body.speciality,
        experience: req.body.experience,
        description: req.body.description,
        clinic: req.body.clinic,
        city: req.body.city,
        rating: req.body.rating,
        service: req.body.service,
        gender: req.body.gender,
        contact: req.body.contact,
        college: req.body.college,
        year_of_complition: req.body.year_of_complition,
        type_of_clinic: req.body.type_of_clinic,
        medical_license_number: req.body.medical_license_number
        
    });
  
            newData.save(function(err){
                if(err)
                res.send(err).status(400);
                else
                res.send("Data Saved").status(201);
            });
            
        
});



module.exports=router;



