import React from 'react'
import { deletePost } from '../api/PostApi'

const Button = ({value, className, id, data, setData, curEle, handleUpdatedPost}) => {

  const handleDeletePost = async (id) => {
    
    try {
     const res =  await deletePost(id);  
    
     if(res.status === 200){
      const newUpdatedData = data.filter((curEle) => {
        return curEle.id !== id 
      });
      
      localStorage.setItem('posts', JSON.stringify(newUpdatedData));
      
      setData(newUpdatedData);
     }
    
    } catch (error) {
     console.log(error);
    }
   };


  return (
    <div>
      <button 
        className= {`button ${className ? `${className}` : 'bg-green-700' } 
        ${className ? 'hover:text-red-500' : 'hover:text-green-700' }`}
        onClick={() => { 
          if(id) handleDeletePost(id); 
          if(handleUpdatedPost) handleUpdatedPost(curEle);
          }
        }
        type='submit'
      >
        {value}
      </button>
    </div>
  )
}

export default Button