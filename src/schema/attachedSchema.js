const mongoose = require('mongoose');

const attachedSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    url: String,   
    data: String
})

module.exports = attachedSchema;