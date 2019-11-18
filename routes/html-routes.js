// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");
var exphbs = require("express-handlebars");
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    app.get("/", function(req, res){
        db.Burger.findAll({})
            .then(function(dbBurger){
                res.render("index", {burgers: dbBurger});
            });
    });
};