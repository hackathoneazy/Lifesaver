const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Encryption

const diagnosisModel = require('../models/diagModel');


router.get('/',function(req,res){
    // res.send("Patient's home").status(200);
    diagnosisModel.find()
    .populate('patient','-iceone -patienthistory')
    .populate('doctor','')
    .exec()
    .then(patientData=>{
    
        res.json(patientData).status(200);
    })
});

router.post('/',function(req,res){
    // console.log(res.body);
    // res.json(req.body).status(200);
    const newDiagnosis = new diagnosisModel({
            _id : new mongoose.Types.ObjectId,
            patient : req.body.patient,
            doctor : req.body.doctor
        
    });

    //Saving the Diagnosis data
    newDiagnosis.save(function(err){
        if(err)
        res.send(err).status(400);
        else
        res.send("Diagnosis Saved").status(201);
    });
    
    
});



module.exports=router;