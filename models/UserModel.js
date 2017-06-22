// User model

var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    Firstname: String,
    Lastname: String,
    Username: String,
    Password: String,
    Enabled: Boolean
});

module.exports = mongoose.model('Users', UserSchema);