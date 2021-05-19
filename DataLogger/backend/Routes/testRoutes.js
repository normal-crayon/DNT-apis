const { json } = require('body-parser');
const read = require('../models/Reading');
const router = require('express').Router()

//URL           - /test
//              - test endpoint

router.get('/test', (req, res)=>{
    return res.json({
        message: 'server is on !!'
    });
})

router.post('/test/post', (req, res)=>{
    const data = req.body;
    const value = new read({ value : data});
    value.save().then( result => {
        return res.json({
            message: 'test insertion success',
            success: true,
            value: value
        })
    })

    .catch( err => {
        return res.json({
            message: 'test insertion failed',
            success: false,
            error: err
        })
    })
})

router.get('/test/get', (req, res) => {
    const data = read.find().sort({_id : 1})
    .then( data => {
        return res.json( data );
    })
})
module.exports = router;