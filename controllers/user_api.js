var UserModel = require('../models/UserModel.js');

exports.Add = function(req, res){
  new UserModel({
      Firstname: req.body.firstname,
      Lastname: req.body.lastname,
      Username: req.body.username,
      Password: req.body.password,
      Enabled: req.body.enabled
  }).save();

  res.send("Ok");
};

exports.echo = function(req, res){
    console.log(req.body);
    res.send("ok");
};