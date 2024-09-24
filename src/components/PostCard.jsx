import React from 'react'
import Button from './Button';

const PostCard = ({data}) => {
  console.log(data);
  return (
    <section className='grid gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
        {
          data.map((curEle) => {
            const {id,body, title} = curEle;
            return (
            <div 
              key={id} 
              className='border-l-2 border-red-500 bg-slate-300 rounded shadow-sm text-lg p-3 leading-relaxed shadow-slate-800 flex flex-col gap-4'
            >
              <div className='flex-grow'>
                <p>{id}.</p>
                <p>
                  <span className='font-bold text-slate-800'>
                    Title:
                  </span> {title}
                </p>
                <p>
                  <span className='font-bold text-slate-900'>
                    Description:
                  </span> {body}
                </p>
              </div>
              <div className='flex gap-3 justify-end'>
                <Button value='Update'/>
                <Button  
                  value='Delete' 
                  className='bg-red-500'
                  id={id}
                />
              </div>
            </div>
            )
          })
        }
    </section>
  )
}

export default PostCard;