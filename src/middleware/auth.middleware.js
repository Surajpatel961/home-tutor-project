import  jwt  from "jsonwebtoken";

const authMiddleware = async ( req ,res , next) => {

    const authHeader = req.headers.authorization

    if(!authHeader){
        return res.status(400).json({
            success:false,
            message:"Access denied , No token provided"
        })
    }

    const token = authHeader.split(" ")[1];

    try{
    
        const decoded = await jwt.verify(token , process.env.JWT_SECRET)

        req.user = decoded

        console.log(jwt.verify(token, process.env.JWT_SECRET))

        next();

    
    }catch(error){
      res.json({
        success:false,
        message:"Invalid or expired token"
      })
    }

}

export default authMiddleware;