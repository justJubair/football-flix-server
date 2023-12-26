const express = require("express")
const getSliders = require('../../api/sliders/getSliders');
const router = express.Router();

// GET; all the sliders
router.get("/api/v1/sliders", getSliders);

module.exports= router;