import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const Create = () => {
 const  [fdsf,setsd]=  useState();
const  {register,handleSubmit }   = useForm({}) 
const onSubmit = async (data)=>{

  console.log(data.description);
    const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("image", data.image[0]);   
        console.log(formData.get("title"));
    try{
    
          await axios.post("https://blogapi-wm30.onrender.com/api/v1/blog",formData,{
            headers:{
                "Content-Type": "multipart/form-data",
                Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTI0OGVhN2I5ZWFjYzJmYzYxNmJiOSIsImlhdCI6MTY3NTkzODY2OSwiZXhwIjoxNjc1OTUzMDY5fQ.N2ObkXfLIJCrQfiunD1yHq6Dpgq9hDYEMnmpK7kUzyc"
            }
        })

alert("Successfully");
    } catch(err)
  {
    console.error(err.response);
  }

}

  return (
    <div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
       <input type="text"  {...register("title")} placeholder='enter title' />

          </div>
          <div>
            <textarea   {...register("description")}  id="" cols="30" rows="10"></textarea>

          </div>
          <div>
            <label htmlFor="">Image</label>
            <input type="file" name="" id=""
                  {...register("image")}
            />
          </div>
  <button> Create</button>
        </form>
    </div>
  )
}

export default Create