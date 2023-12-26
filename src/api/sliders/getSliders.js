const Sliders = require("../../models/Sliders");
const getSliders = async (req, res) => {
  const result = await Sliders.find();
  res.send(result);
};

module.exports = getSliders