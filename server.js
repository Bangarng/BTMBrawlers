var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var db = require("./models");
var app = express();

var PORT = process.env.PORT || 1994;

var controller = require("./controller/btmbrawlerController");
var apiController = require("./controller/apiRouteController");

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(controller);
app.use(apiController);


db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("PORT is listening at https://localhost: " + PORT);
    });
})
