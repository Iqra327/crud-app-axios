import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import Form from "./Form";
import Button from "./Button";

const Posts = () => {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData =async () => {
    
    const savedPosts = localStorage.getItem('posts');
    if(savedPosts){
      setData(JSON.parse(savedPosts));
    }
    else{
      const res = await getPost();
      setData(res.data);
    }
  }

  useEffect(() => {
    getPostData();
  }, []);

  const handleUpdatedPost = (curEle) => {
    setUpdateDataApi(curEle);
  }

  return (
    <section className="flex flex-col gap-12" >
      <Form 
        data={data} 
        setData={setData} 
        updateDataApi={updateDataApi} 
        setUpdateDataApi={setUpdateDataApi}
      />
      
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
                <Button 
                  value='Edit' 
                  setData={setData} 
                  data={data} 
                  curEle={curEle} 
                  handleUpdatedPost={handleUpdatedPost}
                />
                <Button  
                  value='Delete' 
                  className='bg-red-500'
                  id={id}
                  setData={setData} 
                  data={data}
                />
              </div>
            </div>
            )
          })
        }
    </section>
    </section>
  )
}

export default Posts;