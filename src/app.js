require("dotenv").config()
const express = require("express")
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
const app = express()
const port = process.env.PORT || 5000;

const sliderRoutes = require("./routes/sliders/index")
const playerRoutes = require("./routes/players/index")

applyMiddleware(app)
app.use(sliderRoutes)
app.use(playerRoutes)

app.get("/health", (req,res)=>{
    res.send("Football is running on mongoose")
})

app.all("*", (req,res,next)=>{
    const error = new Error(`The requsted url is invalid: [${req?.url}]`)
    error.status = 404
    next(error)
})

app.use((err,req,res,next)=>{
    res.status(err.status || 500).json({
        message:err.message
    })
})

const main = async()=>{
    await connectDB();

    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`)
    })
}

main()