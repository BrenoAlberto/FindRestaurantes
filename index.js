var bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    express = require("express"),
    app = express(),
    expressSanitizer = require("express-sanitizer")
    jsonData = require('.//public/restaurants.json');

app.set("view engine", "ejs");
app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


app.get("/", function(req, res){
    res.render("index",{'restaurants' : jsonData});
})

app.listen(3000, function () {
    console.log("Server init");
});
