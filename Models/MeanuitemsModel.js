const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const MeanuiteamsSchema = new Schema(
    {
       "name": {type:String},
       "description":  {type:String},
       "ingridients":  {type:Array},
       "restaurantId":{type:String},
       "image": {type:String},
       "qty": {type:Number},
       "price": {type:Number},
     });

const MeanuiteamsModel = mongoose.model("menuitem",MeanuiteamsSchema,"menuitems");



module.exports = MeanuiteamsModel;