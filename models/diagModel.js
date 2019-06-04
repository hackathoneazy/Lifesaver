const mongoose = require('mongoose');

const diagModel = ({
   _id : mongoose.Schema.Types.ObjectId,
   patient : {
       type : mongoose.Schema.Types.ObjectId,
       ref :'patient',
       required : true
    },
   doctor : {
    type : mongoose.Schema.Types.ObjectId,
    ref :'doctor',
    required : true
    },
    status : {
        type : String,
        default:"Not Diagnosed"
    },
    time : {
        type:Date,
        default:Date.now
    } 
});

module.exports = mongoose.model('diagnosis',diagModel);