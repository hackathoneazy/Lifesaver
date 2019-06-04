const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const doctorModel=require('../models/doctorModel');
const bcryptjs = require('bcryptjs'); // Encryption

router.get('/',function(req,res){
    // res.send("Doctor's Home").status(200);
    doctorModel.find()
    .populate('doctor','-medical_license_number')
    .populate('doctor','-password')
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
        password: bcryptjs.hashSync(req.body.password,10),
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
            
        //Updating the email of Doctor with ID , note the path - do it likewise 
router.put('/:doctorID/update/email',function(req,res){
    const id = req.params.doctorID;
    const newEmail =req.body.email;
    doctorModel.updateOne({_id:id},{$set:{email:newEmail}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
      //Updating the degree of Doctor with ID , note the path - do it likewise 
      router.put('/:doctorID/update/degree',function(req,res){
        const id = req.params.doctorID;
        const newDegree =req.body.degree;
        doctorModel.updateOne({_id:id},{$set:{email:newDegree}})
        .exec()
        .then(data=>{
            res.json(data).status(200);
        })
    });
    
    

//deleting the record of one doctor with ID 
router.delete('/:doctorID',function(req,res){
    const id = req.params.doctorID;
    doctorModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});
});



module.exports=router;



