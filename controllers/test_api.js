var ExampleModel = require('../models/ExampleModel.js');

exports.test = function(req, res){
    new ExampleModel({
        ExampleData: "Hello world"
    }).save();
    res.send("Complete");
}