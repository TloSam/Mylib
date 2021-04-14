const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Book = new Schema({
    nomeb: { type: String, required: true },
    editora: { type: String, required: true },
    versao: { type: Number, required: true },
    autor: { type: String, required: true },
    empr: {type: Boolean, required: false }
});



const MyModel = mongoose.model('Books', Book);

module.exports = MyModel