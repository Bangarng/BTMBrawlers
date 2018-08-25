var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");

router.get("/", function(req, res){
    db.findAll({}).then(function(results) {
        res.render("index", {brawler: results}); 
    });
});

module.exports = router;