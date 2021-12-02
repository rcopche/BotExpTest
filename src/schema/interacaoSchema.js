const mongoose = require('mongoose');

const interacaoSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    texto: String,   
    data: String
})

module.exports = interacaoSchema;

