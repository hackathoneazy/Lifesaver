const express=require('express');
const morgan = require('morgan');
const port=3000;
const app=express();
const parser=require('body-parser');
const mongoose=require('mongoose');
const doctors=require('./routes/doctors'); // DoctorRoute path
const patients=require('./routes/patients'); //Patients path
const diagnosis=require('./routes/diagnosis'); //Diagnosis Path

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));


mongoose.connect("mongodb+srv://Salman:qwerty123@victorcluster-6cqju.mongodb.net/test?retryWrites=true",function(err){
    if(err)
    {
        console.log(err);
    }
    else{   
        console.log("Atlas Connected");
    }
});

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    next();
});

//List all the routes here
app.use('/doctors',doctors);
app.use('/patients',patients);
//app.listen('/diagnosis',diagnosis);


app.listen(port,function(){
    console.log(`Server Listining on ${port}`);
});