const express = require("express");
const getPlayers = require("../../api/players/getPlayers");
const getPlayersCount = require("../../api/players/getPlayersCount")
const router = express.Router();

// GET; players with page limit
router.get("/api/v1/players", getPlayers);

// GET; players count
router.get("/api/v1/playersCount", getPlayersCount)

module.exports = router