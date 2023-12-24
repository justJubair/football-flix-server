const Sliders = require("../../models/Sliders");
const getSliders = async (req, res) => {
  // const cursor = Sliders.find();
  // const result = await cursor.toArray();
  // res.send(result);
  const result = await Sliders.find();
  res.send(result);
};

module.exports = getSliders