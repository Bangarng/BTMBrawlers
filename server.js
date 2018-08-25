var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();

var PORT = process.env.PORT || 1994;

var controller = require("./controller/btmbrawlerController");


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(controller);

app.listen(PORT, function() {
    console.log("PORT is listening at https://localhost:" + PORT);
});