import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Post from './Post';

const Blog = () => {
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
  useEffect(()=>{
    fetchBlog();
  },[])

console.log(blogs)
  return (
<div>
    
     {
       blogs.map(item =>  <Post  item={item}/> )  
    } 
    
    </div>
  )
}

export default Blog