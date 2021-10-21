const jwt = require("jsonwebtoken")



module.exports = {
    authenticate(req, res, next){
        // jwt will verify that we are authorized to view this route
        jwt.verify(
            req.cookies.usertoken,
            process.env.JWT_SECRET,
            (err, payload)=>{
                if(err){
                    res.status(401).json({verified:false});
                }else{
                    next();
                }
            }
        );
    }
}