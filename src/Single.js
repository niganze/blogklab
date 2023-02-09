import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Single = () => {
    const [blogs , setBlogs] =  useState([]);



    const  fetchBlog  = async () =>{
  
      try{
        const response =     await  axios.get('https://blogapi-wm30.onrender.com/api/v1/blog')    //  promise
        setBlogs(response.data.blogs);
      }
      catch(err){
        console.log(err.response)
      }
      //  axios.post('',,) // promise
      //  axios.delete();
  
    }

    const   [singlePost ,setSinglePost]  = useState();
  
    const  {blogId}  =  useParams();
  
    
  
useEffect(()=>{

    fetchBlog();
    
  },[])

let  single = blogs.find(item => 
    {
        return item._id === blogId;
    }
    
)

  return (
    <div>

  <img src={single?.image} alt={single?.title} />
        <h1>{single?.title}</h1>
        <p>{single?.description}</p>
    </div>
  )
}

export default Single