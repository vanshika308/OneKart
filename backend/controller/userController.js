import User from "../model/userModel"

export const getCurrentUser = async(params) =>{
    try {
        let user = await User.findById(req.userId).select("-password");
        if(!user){
           return res.status(404).json({
            message: "User not found!"
           }); 
        }
        return res.status(200).json(user);
    } catch (error) {
         console.log("google login error",error.message);
          return res.status(500).json({
            message: `googleLogin error ${error}`
        })
    }
}