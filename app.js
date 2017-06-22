var express = require('express');
var mongoose = require('mongoose');
var app = express();

// Connect to db
mongoose.connect('mongodb://localhost/sandbox');

// Require Routes
var Test_API = require('./controllers/test_api.js');

// Test API Methods
app.get('/test', Test_API.test);

app.listen(5000);
console.log("server started on port: 5000");
