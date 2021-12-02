const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    category: String,
    questions:[{
        question:String
    }]

})

const question = mongoose.model('questions', questionSchema)
module.exports = question;