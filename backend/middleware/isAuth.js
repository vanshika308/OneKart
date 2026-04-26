import jwt from 'jsonwebtoken';

const isAuth = async(req,res,next) =>{
    try {
        let {token} = req.cookies;
        if(!token){
            return res.status(400).json({
                message: "User does not have a token"
            })
        }
        let verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(400).json({
                message: "User does not have a valid token"
            })
        }

        req.UserId = verifyToken.userId;
        next();
    } catch (error) {
         console.log("IsAuthError",error.message);
          return res.status(500).json({
            message: `IsAuthError error ${error}`
        })
    }
}

export default isAuth;