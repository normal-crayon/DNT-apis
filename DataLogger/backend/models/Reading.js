const mongo = require('mongoose')

const readSchema = mongo.Schema({
    value: Number
})

module.exports = mongo.model('Reading', readSchema);