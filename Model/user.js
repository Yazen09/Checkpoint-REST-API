const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    name: {
        type: String,  
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,  
        required: true
    }
});

module.exports = model("User", UserSchema); 
