const User = require("../../model/user.model");



const login =  async (req,res)=> {

    
    const {email,password} = req.body;


    if(!email || !password){
        return res.status(400).json({message:"Please provide email and password"})
    }
    // check if user exists
    const user = await User.findOne({email})

    if(!user){
        return res.status(401).json({message:"Invalid credentials"})
    }
    // check if password is correct
    const isMatch = await user.check_password(password);


    if(!isMatch){
        return res.status(401).json({message:"Invalid credentials"})
    }

    // generate token
    const token = user.generateToken();

    res.status(200).json({token});

}
module.exports = login;