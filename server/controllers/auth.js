import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import users from "../models/auth.js"
export const signup=async(req,res)=>{
  const {name,email,password,browsers,operating,device}=req.body;
  console.log("Post  data "+ password);
  try{
    const exitinguser=await users.findOne({email});
    console.log(exitinguser);
    if(exitinguser)
    {
        return res.status(404).json({message:"User already exits..."});
    }

    const hashedPassword=await bcrypt.hash(password,12);
    const newUser=await users.create({name,email,password:hashedPassword,browser:browsers,operatingSystem:operating,deviceType:device})
    const token=jwt.sign({email:newUser.email,id:newUser._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    res.status(200).json({result:newUser,token});
  }catch(error)
  {
    console.log(error);
    res.status(500).json("Something went wrong...")
  }
}
export const login=async(req,res)=>{
    const {email,password,browsers,operating,device}=req.body;
    try {
        const exitinguser=await users.findOne({email});
        if(!exitinguser)
    {
        return res.status(404).json({message:"User Doesn't exits..."});
    }
    const isPasswordCrt=await bcrypt.compare(password,exitinguser.password);
    if(!isPasswordCrt)
    {
        return res.status(400).json({message:"Invalid Credentials"});
    }
    const token=jwt.sign({email:exitinguser.email,id:exitinguser._id},process.env.JWT_SECRET,{expiresIn:"1h"});
    try {
      const {id:_id}=req.params;
      const updatedProfile=await users.findByIdAndUpdate(_id,{$set:{'browser':browsers,'operatingSystem':operating,'deviceType':device}},{new:true})
      res.status(200).json(updatedProfile);
    } catch (error) {
      res.status(404).json({message:error.message});
    }
    res.status(200).json({result:exitinguser,token});

    } catch (error){
      console.log(error);
        res.status(500).json("Something went wrong...")
    }

}