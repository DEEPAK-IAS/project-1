const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")


async function signUp(req,res,next) {
  try {

    const {name, email, password, phone} = req.body;

    console.log(phone);

    const user = await User.findOne({email: email});
    
    if(user) {
      return res.status(400).json({
        message: "user already exists..."
      })
    }

    const hashedPassword = bcrypt.hashSync(password,10);

    const newUser = await User.insertOne({
      name: name,
      email: email,
      password: hashedPassword,
      phone: phone
    });

    res.status(200).json({
      message: "user signup successfully..."
    })
   
  } catch(err) {
    next(err)
  }
}



async function signIn(req,res,next) {
  try {

    const {email, password} = req.body;

    const user = await User.findOne({email: email});

    if(!user) {
      return res.status(404).json({
        message: "user not found ..."
      })
    }

    const access_token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY);

    const {password:_,...rest} = user._doc;


    res.status(200).cookie("access_token",access_token).json({
      message: "user signin successfully...",
      data: {
        user : rest
      }
    })



  } catch(err) {
    next(err);
  }
}


async function signOut(req,res,next) {
  try {
    res.status(200).clearCookie("access_token").json({
      message: "user signOut successfully..."
    })
  } catch(err) {
    next(err);
  }
}

module.exports = {
  signUp,
  signIn,
  signOut
}



