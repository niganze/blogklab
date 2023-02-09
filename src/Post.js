import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({item}) => {
  return (
    <div>
    <img src={item.image} alt={item.title} />
    <h1>{item.title}</h1>
    <p>{item.description}</p>
    {/* <h1>{item}</h1> */}

    <Link to={`/${item._id}`}>
    Read more
    </Link>
    </div>
  )
}

export default Post