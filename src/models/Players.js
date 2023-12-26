const mongoose = require("mongoose");
const {Schema} = mongoose;

const PlayersSchema = new Schema({
    name: String,
    position: String,
    overall_rating: Number,
    nationality: String,
    club: String,
    image_url: String,
    season_contract_price: Number
})

const Players = mongoose.model("Players", PlayersSchema);

module.exports= Players