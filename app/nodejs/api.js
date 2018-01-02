var express = require('express');
var dal = require('./sql.js');
var app = express();


app.get('/*', function(req, res) {
    dal.getProuducts(function(err, prod) {
        if (err) {
            res.end('error :P!');
        }
        res.end(JSON.stringify(prod));
    })

    console.log('/');
    res.end('/');
});

app.get('/shippers', function(req, res) {
    dal.getShippers(function(err, prod) {
        if (err) {
            res.end('error :P!');
            // throw err;
        }
        res.end(JSON.stringify(prod));
    })
});

app.get('/suppliers', function(req, res) {
    dal.getSuplliers(function(err, prod) {
        if (err) {
            res.end('error :P!');
            // throw err;
        }
        res.end(JSON.stringify(prod));
    })

});
app.get('/prouducts', function(req, res) {
    dal.getProuducts(function(err, prod) {
        if (err) {
            res.end('error :P!');
        }
        res.end(JSON.stringify(prod));
    })
});
app.post('/products', function(req, res) {
    console.log('/products');
    res.end('products');
});

var server = app.listen(8081, function() {
    console.log('server');
});