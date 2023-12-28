const Players = require("../../models/Players");

const getPlayers = async(req,res)=>{
    // const options = {
    //     page: parseInt(req.query?.page),
    //     limit: parseInt(req.query?.limit)
    // }
   
   
    
    // const result = await Players.paginate({}, options)
    const result = await Players.find();
    res.send(result);
    res.send(result)
}

module.exports=getPlayers