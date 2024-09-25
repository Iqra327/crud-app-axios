import React from 'react'
import Input from './Input'
import Button from './Button'

const Form = ({data, setData}) => {

  

  return (
    <form className='top-section'>
       <div className="flex gap-4 max-[612px]:flex-col bg-red-400">
          <Input />
          <Input />
        </div>
        <Button value="Add" />
    </form>
  )
}

export default Form