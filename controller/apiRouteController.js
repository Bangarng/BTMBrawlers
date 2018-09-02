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
  itemDB.findAll({}).then(function(itemDB){
    res.json(itemDB);
  })
})

module.exports = router;


