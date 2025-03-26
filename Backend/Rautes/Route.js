const express =require ("express");


const router =express.Router();
const Task=require("../Model/userTask.js");
console.log(Task);




router.get("/view",async(req,res)=>{
    try{
       let data=await Task.find();
       console.log(data);
res.status(201).json({messages:"Data show",task:data});
    }catch(err){
        res.status(500).json({message:"Internal server error",details:err.message});
    }
})

router.post("/add",async(req,res)=>{
    try {
        const { title, description, completed } = req.body;

        // ✅ Check for missing fields
        if (!title || !description) {
            return res.status(400).json({ error: "Title and description are required" });
        }

        // ✅ Create and save task
        const newTask = new Task({ title, description, completed });
        const savedTask = await newTask.save();
console.log(savedTask);
        res.status(201).json({ message: "Task added successfully", task: savedTask });
    } catch (error) {
        res.status(500).json({ error: "Internal server error", details: error.message });
    }

})

router.delete("/delete/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        console.log(id);
let data=await Task.findByIdAndDelete(id);
res.status(201).json({message:"Data deleted",task:data});

    }catch(err){
res.status(500),json({message:"Internal server error",details:err.message})
    }
})

router.put("/update/:id",async(req,res)=>{
    try{
        let {id}=req.params;
        console.log(id);
        let {title,description,completed}=req.body;
        let data=await Task.findByIdAndUpdate(id,{title,description,completed},{new:true});
        res.status(201).json({message:"Data updated",task:data});
    }catch(err){
        res.status(500).json({message:"Internal server error",details:err.message});
    }
})

module.exports=router;