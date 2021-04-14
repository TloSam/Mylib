const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    nome: { type: String, required: true },
    senha: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

// User.path('nome').set(function (v) {
//     return capitalize(v);
// });

const MyModel = mongoose.model('Users', User);

module.exports = MyModel