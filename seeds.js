var mongoose = require("mongoose");
var Restaurant = require("./models/restaurant");
var jsonData = require('./public/restaurants.json');

jsonData.forEach(function(seed){
    seed.stars = Math.floor(Math.random() * (6 - 0)) + 0;
    seed.distance = Math.floor(Math.random() * (26 - 1) + 1);
});

function seedDB() {
    Restaurant.remove({}, function (err) {
        if (err) {
            console.log("err");
        }
        else {
            console.log("removido");
        }
        jsonData.forEach(function (seed) {
            Restaurant.create(seed, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added a Restaurant");
                }
            });
        });
    });
}



module.exports = seedDB;
