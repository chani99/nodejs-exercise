var bl = require('./bl');

// CRUD
function read(callback) {

    bl.products.getProducts(function(err, custArray) {
        if (err) {
            callback(err);
        }

        callback(null, custArray);
    })
}

function put(data, callback) {
let newProduct = new models.Prudcts(data);
    bl.products.newProduct(function(err, newProduct) {
        if (err) {
            callback(err);
        }

        callback(null, custArray);
    })
}



module.exports.Read = read;
module.exports.Put = put;