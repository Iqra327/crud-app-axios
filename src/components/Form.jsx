import React, { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData , updateDataApi, setUpdateDataApi}) => {
  
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  //get updated data and add into input field

  let isEmpty = Object.keys(updateDataApi).length === 0;

  useEffect(() => {
    updateDataApi && setAddData({
      title: updateDataApi.title || '',
      body: updateDataApi.body || '',
    })
  }, [updateDataApi])

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setAddData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const addPostData = async () => {
    const res = await postData(addData);
  
    if (res.status === 201) {
      const updatedData = [...data, res.data];
      setData(updatedData);
      setAddData({title: '', body: ''});
      localStorage.setItem("posts", JSON.stringify(updatedData));
    }
  };

  //update post
  const updatePostData = async () => {
    try {
      const res = await updateData(updateDataApi.id, addData);
      console.log(res);
      if(res.status === 200){
        setData((prev) => {
          return prev.map((curElem) => {
            return curElem.id === res.data.id ? res.data : curElem;
          });
        });
      }; 
      setAddData({title: '', body: ''});  
      setUpdateDataApi({});   
    } catch (error) {
      console.log(error);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const action = e.nativeEvent.submitter.value;
    if(action === 'Add'){
      addPostData();
    }else if(action === 'Update'){
      updatePostData();
    }
  };

  return (
    <form className="top-section" onSubmit={handleFormSubmit}>
      <div className="flex gap-4 max-[612px]:flex-col bg-red-400">
        <input
          className="input"
          type="text"
          placeholder="Add title"
          name="title"
          id="title"
          value={addData.title}
          onChange={handleInputChange}
        />
        <input
          className="input"
          type="text"
          placeholder="Add Post"
          name="body"
          id="body"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button 
        value={isEmpty? 'Add' : 'Update'}
        className="button bg-green-600"
      >
        {isEmpty? 'Add' : 'Update'}
      </button>
    </form>
  );
};

export default Form;
