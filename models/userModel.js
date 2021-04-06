const MONGOOSE = require('mongoose');
const Schema = MONGOOSE.Schema;

const User = new Schema({
    firstname: { type: String },
    lastname: { type: String },
    age: { type: Number },
    gender: { type: String },
    email: { type: String },
});

module.exports=MONGOOSE.model('users', User);