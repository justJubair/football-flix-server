const Players = require("../../models/Players");

// GET; players estimated count
const getPlayersCount = async(req,res)=>{
    const count = await Players.estimatedDocumentCount()
    const result = {count}
    res.send(result)
  }

  module.exports=getPlayersCount