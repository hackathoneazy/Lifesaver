const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs'); // Encryption

const patientModel = require('../models/patientModel.js');

//Retrieve data of all patients
router.get('/',function(req,res){
    // res.send("Patient's home").status(200);
    patientModel.find()
    .exec()
    .then(patientData=>{
    
        res.json(patientData).status(200);
    })
});

//Registerng data of one patient
router.post('/',function(req,res){
    // console.log(res.body);
    // res.json(req.body).status(200);
    const newPatient = new patientModel({
            _id : new mongoose.Types.ObjectId,
            height : req.body.height,
            weight : req.body.weight,
            email : req.body.email,
            password : bcryptjs.hashSync(req.body.password,10),
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

//Updating the height of patient with ID , note the path - do it likewise 
router.put('/:patientID/update/height',function(req,res){
    const id = req.params.patientID;
    const newHeight =req.body.height;
    patientModel.updateOne({_id:id},{$set:{height:newHeight}})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});

//deleting the record of one patient with ID 
router.delete('/:patientID',function(req,res){
    const id = req.params.patientID;
    patientModel.deleteOne({_id:id})
    .exec()
    .then(data=>{
        res.json(data).status(200);
    })
});

module.exports=router;
