const mongo = require('mongoose')

//test schema
const readSchema = mongo.Schema({
    value: Number
})

module.exports = mongo.model('Reading', readSchema);