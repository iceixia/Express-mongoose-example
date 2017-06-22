var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

// Connect to db
mongoose.connect('mongodb://localhost/sandbox');

// Require Routes
var Test_API = require('./controllers/test_api.js');
var User_Api = require('./controllers/user_api.js');

// Test API Methods
app.get('/test', Test_API.test);

// User API methods
app.post('/api/user/add', User_Api.Add);
app.post('/api/user/echo', User_Api.echo);

app.listen(5000);
console.log("server started on port: 5000");
