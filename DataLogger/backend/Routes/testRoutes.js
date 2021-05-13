const { json } = require('body-parser')

const router = require('express').Router()

router.get('/test', (req, res)=>{
    return res.json({
        message: 'server is on !!'
    });
})

module.exports = router;