var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");
var itemDB = require("../models/itemDB");

router.get("/", function(req, res){
    db.findAll({}).then(function(results) {
        res.render("index", {brawler: results}); 
    });
});

router.get("/gamepage", function(req, res){
    db.findAll({}).then(function(results) {
        res.render("gamepage", {brawler: results}); 
    });
    // db.findOne({
    //    where: {pass: "jeremy123"}
    // }).then(function(results) {
    //    res.render("gamepage", {brawler: results}); 
    // });
});

router.get("/item", function(req, res){
    itemDB.findAll({}).then(function(results) {
        res.render("items", {itemStuff: results}); 
    });
});

router.post("/createuser", function(req, res){ //needed to create a new path name /createuser to activate a new command
    db.create({
        userName: req.body.userName,
        pass: req.body.password,
        charName: req.body.charName,
        attack: req.body.attack,
        defense: req.body.defense,
        intellect: req.body.intellect,
        itemOne: req.body.itemOne,
        itemTwo: req.body.itemTwo,
        itemThree: req.body.itemThree,
        bossOne: req.body.bossOne,
        bossTwo: req.body.bossTwo,
        bossThree: req.body.bossThree
    }).then(function(dbd){
        res.json(dbd)
        console.log(dbd)
    }).catch(function(err){
        console.log(err);
        res.json(err);
    });
});

module.exports = router;
