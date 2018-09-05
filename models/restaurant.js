var mongoose = require("mongoose");

var restaurantSchema = new mongoose.Schema({
   name: String,
   kitchen: String,
   photo: String,
   distance: Number,
   starts: Number,
});

module.exports = mongoose.model("Restaurant", restaurantSchema);