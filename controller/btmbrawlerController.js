var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");
var itemDB = require("../models/btmbrawlerDB");

router.get("/", function(req, res){
    db.findAll({}).then(function(results) {
        res.render("index", {brawler: results}); 
    });
});

router.get("/item", function(req, res){
    itemDB.findAll({}).then(function(results) {
        res.render("items", {itemStuff: results}); 
    });
});

module.exports = router;