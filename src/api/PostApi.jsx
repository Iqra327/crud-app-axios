import axios from "axios";

// create instance for base url
const api = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com',
});

//get method
export const getPost = () => {
  return api.get('/posts');
};

//delete Post
export const deletePost = (id) => {
  return api.delete(`/posts/${id}`)
};

//add post
export const postData = (post) => {
  return api.post('/posts', post)
};