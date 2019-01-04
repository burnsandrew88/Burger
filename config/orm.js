var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })
        
    },

    insertOne: function (tableInput, values, cb) {
        console.log(tableInput);
        console.log(values);
        var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES(?);";
        connection.query(queryString, [tableInput, values], function(err, result){
            if (err) throw err;
            console.log(result);
            cb(result);
        })

    },

    updateOne: function(tableInput, columnInput, newValue, location, cb) {
        console.log([tableInput, columnInput, newValue, location]);
        var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
        connection.query(queryString, [tableInput, columnInput, newValue, location], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        })

    } 
}

module.exports = orm;