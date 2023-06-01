//Dotenv used to set Up environment variables required
require('dotenv').config();
//Create a Server using Express module
const app=require('express')()
//Assigning a port to the Server
PORT=process.env.PORT;
app.listen(PORT,()=>console.log(`Server on Port ${PORT}`))

//Cross origin policy to map to frontend at different server
const cors=require('cors')
app.use(cors())

//Connecting database to the application.
const sequelize=require('./db/db_config');
sequelize.authenticate()
//On success
.then(()=>console.log("Db connection Successfull"))
//On Error
.catch(err=>console.log("Db Connection error",err))


//User Routes Import and usage
const UserApp=require('./routes/user_routes')
app.use('/user',UserApp) 
sequelize.sync(/*{alter:true}*/);
//Default error Handler 
app.use((err,req,res,next)=>{
    res.send({message:"Error occured ",err})
})