var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data 
        };
        console.log(hbsObject)
        res.render("index", hbsObject);
    });
});
router.post("/", function(req,res){
    burger.insertOne([
        req.body.burger_name, false
    ], function(){
        res.redirect("/")
    });
});

router.post("/:id", function(req,res){
    var condition = req.params.id;

    console.log("condition", condition);
    burger.updateOne("devoured", true, condition, function(){
        res.redirect("/");
    });
});

module.exports = router;