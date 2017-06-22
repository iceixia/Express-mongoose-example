// The ExampleModel model

var mongoose = require('mongoose'), Schema = mongoose.Schema;

var ExampleSchema = new Schema({
    ExampleData: String
});

module.exports = mongoose.model('Examples', ExampleSchema);