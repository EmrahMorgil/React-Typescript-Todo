import React from "react";
import "./App.css";
import { useState } from "react";
import  {Todo} from "./types/Type";
import Tasks from "./components/Tasks";


const App: React.FC = () => {

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [arr, setArr] = useState<Todo[]>([]);

  const addArray = ():void =>{
    if(title) setArr([...arr, {title: title, content: content, id: arr.length+1}]);
    setTitle("");
    setContent("");
  }

  const removeArray = (id:number):void =>{
    setArr(arr.filter((item:Todo)=>{
      return item.id!==id;
    }))
  }

  const updateArray = (title: string, content:string, id:number) =>{
    const updatedArr: Todo[] = arr.map((item:Todo)=>{
      if(item.id===id){
        return {title:title, content:content, id};
      }
      return item;
    });
   setArr(updatedArr);
  }

  return <div className="App">
    <div className="input">
      <input className="inputs" value={title} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>(setTitle(e.target.value))}/>
      <input className="inputs" value={content} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>(setContent((e.target.value)))}/>
      <button className="add-button" onClick={addArray}>Add</button>
    </div>
      
      <div className="items">
        {arr.map((item:Todo, index:number)=>(
          <Tasks item={item} key={index} removeArray={removeArray} updateArray={updateArray}/>
        ))}
      </div>
      

  </div>;
}

export default App;
