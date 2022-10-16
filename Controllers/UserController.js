const UserModel = require('../Models/UserModel');

module.exports.login =async (request,response)=>{
    let data = request.body;
    try{
    let result = await UserModel.findOne({
        email:data.email,
        password:data.password})
        if(result == null) {
            response.status(200).send({
                status:false,
                message:"wrong user name and password",
            });
        }else{
        
       response.status(200).send({
        status:true,
        message:"login successfully",
    });
}
     }catch(error){
    response.status(500).send({
        status:false,
        error,
    })
   }

}

module.exports.signUp = async (request,response) =>{
    let data = request.body;
    try{

    //create instance
    let newUser = new UserModel({
        Full_Name: data.Full_Name,
            email: data.email,
            mobile: data.module,
            password: data.password,
    });

    //save method
    let result = await newUser.save()
    

    response.status(200).send({
        status:true,
       result,
    });
   }catch(error){
    response.status(500).send({
        status:false,
        error,
    })
   }


}



//////////recording 30 and menter-session 