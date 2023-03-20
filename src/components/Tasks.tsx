import React from "react";
import { useState } from "react";
import { Props } from "../types/Type";

const Tasks: React.FC<Props> = ({ item, removeArray, updateArray }) => {
  const [update, setUpdate] = useState(true);
  const [updatedTitle, setUpdatedTitle] = useState(item?.title);
  const [updatedContent, setUpdatedContent] = useState(item?.content);


  const handleUpdate = () =>{
    setUpdate(true);
    updateArray && updateArray(updatedTitle, updatedContent, item?.id);
    //updateArray var ise güncelle
  }

  return (
    <div>
      {update ? (
        <div className="item">
          <h4>{item?.title}</h4>
          <p>{item?.content}</p>
          <button className="delete-button" onClick={() => removeArray && removeArray(item?.id)}>Delete</button>
          <button className="update-button" onClick={()=>(setUpdate(false))}>Update</button>
        </div>
      ) : (
        <div className="updated-item">
          <input value={updatedTitle} onChange={(e)=>(setUpdatedTitle(e.target.value))}/>
          <input value={updatedContent} onChange={(e)=>(setUpdatedContent(e.target.value))}/>
          <button className="updated-button" onClick={handleUpdate}>Update</button>
        </div>
      )}
    </div>
  );
};

export default Tasks;
