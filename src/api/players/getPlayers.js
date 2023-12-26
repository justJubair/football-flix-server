const Players = require("../../models/Players");

const getPlayers = async(req,res)=>{
    const page = parseInt(req.query?.page)
    const limit = parseInt(req.query?.limit)
    const skip = (page)*limit;
    const result = await Players.find().skip(skip).limit(limit)
    res.send(result)
}

module.exports=getPlayers