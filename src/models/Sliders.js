const mongoose = require("mongoose")
const {Schema} = mongoose;

const SlidersSchema = new Schema({
    tagline: String,
    description: String,
    image_url: String,
})

const Sliders = mongoose.model("Sliders", SlidersSchema);

module.exports= Sliders;