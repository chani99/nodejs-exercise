// Step 1
const mysql = require('mysql');

// Step 2
function connection(callback) {
    const con = mysql.createConnection(
        // connection details
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );
    con.connect(function(err) {
        if (err) {
            callback('Error connecting to DB:' + err);
            return;
        }
        callback(null, con);
    });

}

function getShippers(calkback) {
    connection(function(err, con) {
        if (err) {
            callback('Error connecting to DB:' + err);
        } else {
            con.query(`select * from shippers`, function(err, rows) {
                if (err) calkback(err);
                // console.log(JSON.stringify(rows,null,4));
                rows.forEach(function(row) {
                    calkback(null, row);
                });
            });
        }
    });
}

function getSuplliers(calkback) {
    connection(function(err, con) {
        if (err) {
            callback('Error connecting to DB:' + err);
        } else {
            con.query(`select * from suppliers`, function(err, rows) {
                if (err) calkback(err);
                // console.log(JSON.stringify(rows,null,4));
                rows.forEach(function(row) {
                    calkback(null, row);
                });
            });
        }
    });
}

function getProuducts(calkback) {
    connection(function(err, con) {
        if (err) {
            callback('Error connecting to DB:' + err);
        } else {
            con.query(`select * from products`, function(err, rows) {
                if (err) calkback(err);
                console.log(JSON.stringify(rows, null, 4));
                rows.forEach(function(row) {
                    calkback(null, row);
                });
            });
        }
    });
}




module.exports.getShippers = getShippers;
module.exports.getSuplliers = getSuplliers;
module.exports.getProuducts = getProuducts;