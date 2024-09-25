import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import PostCard from "./PostCard";
import Form from "./Form";

const Posts = () => {
  const [data, setData] = useState([]);
  console.log(data);
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

  return (
    <section className="flex flex-col gap-12" >
      <Form data={data} setData={setData}/>
      <PostCard data={data} setData={setData}/>
    </section>
  )
}

export default Posts;