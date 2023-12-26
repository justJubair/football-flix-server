const express = require("express");
const getPlayers = require("../../api/players/getPlayers");
const router = express.Router();

// GET; players with page limit
router.get("/api/v1/players", getPlayers);

module.exports = router