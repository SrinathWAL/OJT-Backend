//Getting the Environment variables
require('dotenv').config();
const {Sequelize}=require("sequelize");
//Connecting to DB using Sequelize
const sequelize=new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:process.env.DB_DIALECT
    }
);
//Export the Db module to Index file
module.exports=sequelize;