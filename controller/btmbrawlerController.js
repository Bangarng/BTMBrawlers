var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");
var itemDB = require("../models/itemDB");

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

router.post("/", function(req, res){
    db.create({
        userName: req.body.userName,
        password: req.body.password,
        charName: req.body.charName,
        attack: req.body.attack,
        defense: req.body.defense,
        intellect: req.body.intellect,
        bossOne: false,
        bossTwo: false,
        bossThree: false
    }).then(function(db){
        res.json(db)
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
});

module.exports = router;