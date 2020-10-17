var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username : { type : String , require : true , unique : true},
    password : { type : String , require : true }
});

var UserModel = mongoose.model('userList' , userSchema);

module.exports = UserModel;