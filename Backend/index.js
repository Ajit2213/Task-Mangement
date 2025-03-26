const express =require ("express");
const app=express();
require("dotenv").config();
const port=process.env.PORT||8080;

app.use(express.json());
const cors = require("cors");
app.use(cors());

app.use(cors());

app.use(cors({ origin: "https://task-mangement-frontend.onrender.com", credentials: true }));



const taskRoutes =require( "./Rautes/Route.js");
const connectDb=require("./Model/userModel.js");
app.use("/task",taskRoutes);
connectDb();



app.listen(port,()=>{
    console.log("server is runing on port no ",port);
})
