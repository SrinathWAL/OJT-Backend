//Create Express Router
const exp=require("express");
const UserApp=exp.Router();
const validateLogin=require('../middleware/login_validation')
//Import the controller
const {
    loginUser,
}=require("../controllers/user_controllers")

UserApp.use(exp.json())

//For a User to login into the application.
UserApp.post('/loginUser',validateLogin,loginUser)

module.exports=UserApp;
