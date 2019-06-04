const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Encryption

const patientModel = require('../models/patientModel.js');

router.get('/',function(req,res){
    // res.send("Patient's home").status(200);
    patientModel.find()
    .exec()
    .then(patientData=>{
    
        res.json(patientData).status(200);
    })
});

router.post('/',function(req,res){
    // console.log(res.body);
    // res.json(req.body).status(200);
    const newPatient = new patientModel({
            _id : new mongoose.Types.ObjectId,
            height : req.body.height,
            weight : req.body.weight,
            email : req.body.email,
            password : req.body.password,
            name : req.body.name,
            gender : req.body.gender,
            contact : req.body.contact,
            city : req.body.city,
            age : req.body.age,
            bloodgroup : req.body.bloodgroup,
            iceone : req.body.iceone,
            icetwo : req.body.icetwo,
            patienthistory : req.body.patienthistory,
            prescribed : req.body.prescribed
        
    });

    patientModel.find({email:req.body.email})
    .exec()
    .then(users =>{
        if(users.length > 0){
            res.send("Account already exists").status(400);
        }
        else
        {
            newPatient.save();
            res.send("Account Created").status(201);

        }
    })
});

module.exports=router;
