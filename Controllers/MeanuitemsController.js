const MeanuiteamsModel = require("../Models/MeanuitemsModel")

module.exports.getMeanuitemslistByRestID = async (request, response)=>{
   let data = request.params;

   try{
    let result = await MeanuiteamsModel.find({restaurantId:data.res_id});
    response.status(200).send({
        status:true,
        result
    });
   }catch(error){
    response.status(500).send({
        status:false,
        error,
    })
   }
}