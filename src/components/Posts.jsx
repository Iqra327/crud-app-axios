import { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";
import PostCard from "./PostCard";

const Posts = () => {
  const [data, setData] = useState([]);
  console.log(data);
  const getPostData =async () => {
    const res = await getPost();
    setData(res.data);
  }

  useEffect(() => {
    getPostData();
  }, []);

  return (
      <PostCard data={data}/>
  )
}

export default Posts;