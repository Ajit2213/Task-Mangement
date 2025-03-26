import React from 'react'
import {useState,useEffect} from"react"
import axios from "axios"
import { createTask } from '../init/wholedata'
import { useNavigate } from 'react-router-dom'
export const AddForm = () => {
 const navigate=useNavigate();
  let[data,setdata]=useState({
    title:"",
    description:"",
    completed:""
  })


let handlechange=(e)=>{
// const{title,description,Completed}=e.target;
setdata((prevdata)=>{
  let{name,value}=e.target;
  return{
    ...prevdata,
    [name]:value
  }
})
}

let finalvalue=async(e)=>{
  e.preventDefault();
console.log(e);
console.log(data);

let value=await createTask(data);
console.log(value);

setdata({
  title:"",
  description:"",
  completed:""
})


navigate("/")
}

  return (
    <div>
     l
     <form onSubmit={finalvalue} style={{
          border: "2px solid #000", // Border for the form
          padding: "20px", // Padding inside the form
          borderRadius: "5px", // Rounded corners
          width: "300px", // Set form width
          margin:"50px auto"
        }}>
<label htmlFor="title">Title</label>
<br />
<input type="text" name='title' value={data.title} onChange={handlechange} id='title' style={{
            border: "2px solid #000", // Border for the input box
            padding: "8px", // Padding inside the input box
            borderRadius: "5px", // Rounded corners for input box
            width: "100%", // Full width of the container
            marginBottom: "10px", // Space between inputs
          }} required/>
<br />
<label htmlFor="description">Description</label>
<br />
<textarea type="text" name='description' value={data.description} onChange={handlechange} id='description' style={{
            border: "2px solid #000", // Border for the input box
            padding: "8px", // Padding inside the input box
            borderRadius: "5px", // Rounded corners for input box
            width: "100%", // Full width of the container
            marginBottom: "10px", // Space between inputs
          }}
 required/>
 <br />
<label htmlFor="status">Completed</label>
<br />
<input type="text" placeholder='true/false' name='completed'  value={data.completed}  onChange={handlechange}  style={{
            border: "2px solid #000", // Border for the input box
            padding: "8px", // Padding inside the input box
            borderRadius: "5px", // Rounded corners for input box
            width: "100%", // Full width of the container
            marginBottom: "10px", // Space between inputs
          }}  id='completed' required/>
<br />
<button className="bg-green-500 text-white p-2 w-24">Submit</button>
     </form>
    </div>
  )
}
