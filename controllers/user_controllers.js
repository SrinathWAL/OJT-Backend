const expressAsyncHandler=require("express-async-handler")
require('dotenv').config()

//JWT for token Generation
//const bcryptjs=require("bcryptjs")
const jwt=require("jsonwebtoken");


//Import db from inde.js
const db=require('../models/index')

//calling User
let User=db.User

const loginUser = expressAsyncHandler(async (req, res) => {
    try {
      const { user_email, user_password } = req.body;
  
      // Check if email is valid
      const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailRegex.test(user_email)) {
        return res.send({ message: 'Invalid email address' });
      }
  
      // Check password length
      if (user_password.length < 4) {
        return res.send({ message: 'Password should be at least 4 characters long' });
      }
  
      let userRecord = await User.findOne({ where: { user_email: user_email } });
  
      // If user not found
      if (!userRecord) {
        return res.send({ message: 'User not found with email' });
      }
  
      // Check if the password is correct
      if (user_password !== userRecord.dataValues.user_password) {
        return res.send({ message: 'Incorrect password' });
      }
  
      // For a successful login, generate a token with email and secret key
      const signedToken = jwt.sign(
        {
          user_email: userRecord.dataValues.user_email,
        },
        process.env.SECRET_KEY,
        {
          expiresIn: '1d',
        }
      );
  
      res.send({ message: 'Login success', token: signedToken, user: userRecord });
    } catch (err) {
      console.log(err);
    }
  });
  
  
//Exporting the controller to user Routes 
const userApp={
    loginUser
}
module.exports=userApp;