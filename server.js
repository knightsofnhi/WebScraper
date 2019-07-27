let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let logger = require("morgan");

let express = require("express");
let app = express();

app.use(logger("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

let exphbs = require("express-handlebars");
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");