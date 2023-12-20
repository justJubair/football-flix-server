const cors = require("cors")
const cookieParser = require("cookie-parser")
const express = require("express")
const applyMiddleware = (app)=>{
    // middlewares
    app.use(cors())
    app.use(express.json())
    app.use(cookieParser())
}

module.exports = applyMiddleware