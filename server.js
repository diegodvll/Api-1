var express = require('express');
var cors = require('cors');

const whiteList = ['http://ec2-52-53-41-51.us-west-1.compute.amazonaws.com:3000/authentication/login?returnUrl=%2Fdashboard%2Ffreights']


//var port = process.env.PORT || 4000;

var app = express();
app.set('port', process.env.PORT || 4000);
var Api = require("./Controller/apiTest");
app.use(cors()) 

//Routing
app.use('/', Api); 
//app.use('/',express.static('pages'));

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});

