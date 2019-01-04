var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers" , function(res){
            cb(res);
        });
    }, 
    insertOne: function(values, cb){
        orm.insertOne("burgers", values, function(res){
            cb(res);
        });
    },

    updateOne: function(columnInput, newValue, location, cb){
        orm.updateOne("burgers", columnInput, newValue, location, function(res){
            cb(res);
        });
    }
}

module.exports = burger;