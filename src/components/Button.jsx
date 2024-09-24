import React from 'react'
import { deletePost } from '../api/PostApi'

const Button = ({value, className, id}) => {

  const handleDeletePost = async (id) => {
   const res =  await deletePost(id);
   console.log(res.data);
  }
  
  return (
    <div>
      <button 
        className= {`button ${className ? `${className}` : 'bg-green-700' } 
        ${className ? 'hover:text-red-500' : 'hover:text-green-700' }`}
        onClick={() => handleDeletePost(id)}
      >
        {value}
      </button>
    </div>
  )
}

export default Button