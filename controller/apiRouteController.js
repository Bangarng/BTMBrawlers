var express = require("express");
var router = express.Router();
var db = require("../models/btmbrawlerDB");

router.get("/api/", function(req, res) {
    db.findAll({}).then(function(userInfo) {
      res.json(userInfo);
    });
});

module.exports = router;