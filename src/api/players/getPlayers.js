const Players = require("../../models/Players");

const getPlayers = async(req,res)=>{
    try{
        const page = parseInt(req?.query?.page);
        const limit = parseInt(req?.query.limit);

        const options = {
            page: page,
            limit: limit,
        }
        console.log(options)

        const result = await Players.paginate({}, options)
        res.send(result)
    }
    catch(err){
        console.error(err);
        res.status(500).send("Internal Server Error")
    }

    // const options = {
    //     page: parseInt(req.query?.page),
    //     limit: parseInt(req.query?.limit)
    // }
    // console.log(options)
   
   
    
    // const result = await Players.paginate({}, options)
    // // const result = await Players.find();
    // // res.send(result);
    // res.send(result)
}

module.exports=getPlayers