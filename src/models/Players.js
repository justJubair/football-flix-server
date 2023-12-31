const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2")
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


PlayersSchema.plugin(mongoosePaginate)
const Players = mongoose.model("Players", PlayersSchema);

module.exports= Players