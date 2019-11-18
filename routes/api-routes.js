// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our model
var db = require("../models");
var exphbs = require("express-handlebars");

// Routes
// =============================================================
module.exports = function(app) {
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");

    app.get("/api/burgers/", function (req, res){
        db.Burger.findAll({})
            .then(function(dbBurgers){
                res.json({burgers: dbBurgers})
            });
    });

    app.put("/api/burgers_eat/:id", function(req, res){
        console.log("Burger ID: "+req.params.id);
        var burgerId = parseInt(req.params.id);
        db.Burger.update(
            {devoured: 1},
            {where: {
                    id: burgerId
                }
            }).then(function(dbBurgers){
                res.json(dbBurgers);
            });;
        })

    app.post("/api/burgers_new/", function(req, res){
        console.log(req.body.burger);
        db.Burger.create({
            burger_name: req.body.burger
        }).then(function(dbBurgers){
            res.json(dbBurgers);
        })
    });
};