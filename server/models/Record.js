const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    index : {type : String , required : true},
    segment : {type : String , required : true},
    expiryDate : {type : Number , required : true},
}, {timestamps : true});

const Record = mongoose.model('record' , RecordSchema);
module.exports = Record;