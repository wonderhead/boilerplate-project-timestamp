var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const path = require('path');

app.get('/api/timestamp/:date',(req,res) => {
    res.json({})
});