const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

/*
    Usage : GET All Records
    URL : http://127.0.0.1:5000/api/records/
    Params : no-fields
    Method : GET
 */
router.get('/records', async (request , response) => {
    try {
        let records = await Record.find();
        await response.status(200).json(records);
    }
    catch (error) {
        console.error(error);
        await response.status(500).json({msg : `Server Error : ${error.message}`});
    }
});

/*
    Usage : GET a single Record
    URL : http://127.0.0.1:5000/api/records/:record_id
    Params : no-fields
    Method : GET
 */
router.get('/records/:record_id', async (request , response) => {
    let recordId = request.params.record_id;
    try {
        let record = await Record.findById(recordId);
        await response.status(200).json(record);
    }
    catch (error) {
        console.error(error);
        await response.status(500).json({msg : `Server Error : ${error.message}`});
    }
});

/*
    Usage : Create a Record
    URL : http://127.0.0.1:5000/api/records/
    Params : index , segment , expiryDate
    Method : POST
 */
router.post('/records', async (request , response) => {
    try {
        let newRecord = {
            index : request.body.name,
            segment: request.body.image,
            expiryDate : request.body.price,
        };
        // check the record is exists
        let record = await Record.findOne({name : newRecord.name});
        if(record){
           return response.status(401).json({msg : 'Record is Already Exists'});
        }
        record = new Record(newRecord)
        record = await record.save(); // insert into db
        await response.status(200).json({
            msg : 'Record is Created',
            record : record
        });
    }
    catch (error) {
        console.error(error);
        await response.status(500).json({msg : `Server Error : ${error.message}`});
    }
});

/*
    Usage : Update a Record
    URL : http://127.0.0.1:5000/api/records/:record_id
    Params : index , segment , expiryDate
    Method : PUT
 */
router.put('/records/:record_id', async (request , response) => {
    let recordId = request.params.record_id;
    try {
        let updateRecord = {
            index : request.body.index,
            segment: request.body.segment,
            expiryDate : request.body.expiryDate,
        };

        let record = await Record.findByIdAndUpdate(recordIdId, {
            $set : updateRecord
        } , {new : true});

        await response.status(200).json({
            msg : 'Record is Updated',
            record : record
        });
    }
    catch (error) {
        console.error(error);
        await response.status(500).json({msg : `Server Error : ${error.message}`});
    }
});

/*
    Usage : Delete a Record
    URL : http://127.0.0.1:5000/api/records/:record_id
    Params : no-fields
    Method : DELETE
 */
router.delete('/records/:record_id', async (request , response) => {
    let recordId = request.params.record_id;
    try{
        let record = await Record.findByIdAndDelete(recordId);
        await response.status(200).json({
            msg : 'Product is Deleted',
            record : record
        });
    }
    catch (error) {
        console.error(error);
        await response.status(500).json({msg : `Server Error : ${error.message}`});
    }
});

module.exports = router;