const express = require("express");
const path = require('path');

const api = require('./server/api');

//const {authorize}=require('./authentication.js')

const app = express();
const cors = require('cors');
app.use(cors());





app.use(function(req, res, next) {

  


  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', api());



/* Enforce https
app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] && req.headers['x-forwarded-proto'] === "http") {
        res.redirect("https://" + req.headers.host + req.url);
    } else {
        next();
    }
});*/

module.exports = {app};
