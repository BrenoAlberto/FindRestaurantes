var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    express = require("express"),
    app = express(),
    expressSanitizer = require("express-sanitizer"),
    mongoose = require("mongoose"),
    search = require("./public/search"),
    Restaurant = require("./models/restaurant"),
    seedDB = require("./seeds")

mongoose.connect("mongodb://localhost/restaurant")
app.set("view engine", "ejs");
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));
seedDB();

app.get("*", function (req, res) {
    Restaurant.find({}, function (err, allRestaurants) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { restaurants: allRestaurants });
        }
    });
})

app.listen(3000, function () {
    console.log("APP running on PORT 3000");
});