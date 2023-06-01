//Create Express Router
const exp=require("express");
const UserApp=exp.Router();
//Import the constroller

const {
    loginUser,
}=require("../controllers/user_controllers")

UserApp.use(exp.json())

//For a User to login into the application.
UserApp.post('/loginUser',loginUser)

module.exports=UserApp;
