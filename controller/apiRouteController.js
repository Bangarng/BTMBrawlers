var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");
var itemDB = require("../models/itemDB");


router.get("/api/", function(req, res) {
    db.findAll({}).then(function(userInfo) {
      res.json(userInfo);
    });
});

router.get("/itemAPI", function(req, res){
  itemName: req
  itemDB.findAll({}).then(function(itemDB){
    res.json(itemDB);
  })
})

router.get("/characterAPI", function(req, res){
  db.findAll({}).then(function(data) {
    res.json(data);
  })
})

module.exports = router;


