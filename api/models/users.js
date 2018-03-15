const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    login : { type : String, unique : true, required : true },
    password : { type : String, required : true }
})

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;