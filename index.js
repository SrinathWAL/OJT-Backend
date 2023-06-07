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


//User Routes Import and usage
const UserApp=require('./routes/user_routes')
app.use('/user',UserApp) 


//Default error Handler 
app.use((err,req,res,next)=>{
    res.send({message:"Error occured ",err})
})