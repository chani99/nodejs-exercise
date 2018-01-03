var express = require('express');
var bodyParser = require("body-parser");
var dal = require('./sql.js');


var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', function(req, res) {
    dal.getProuducts(function(err, prod) {
        if (err) 
            res.end('error :P!');
        console.log(prod);
        res.end(JSON.stringify(prod)); 
        
    })
});

app.post('/', function(req, res) {
    dal.setProuducts(req.query.data, function(err, ans) {
        if (err) {
            res.end('error :P!');
        } else {
        // console.log(res);
        res.end(ans);
        }
        
    })

});

var server = app.listen(8081, function() {
    console.log('server is on');
});