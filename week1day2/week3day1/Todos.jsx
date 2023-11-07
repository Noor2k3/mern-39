import React from "react";
import { useState } from 'react'

import './App.css'
 
// ToDos with task, status, and date&time
export default function App(){
  const[toDos,setToDos]= useState([]);
  const[task, setTask]= useState("");
  const[status, setStatus]=useState("completed");

  
  return(
<div className="App">
<form  onSubmit={(Event)=>{
      Event.preventDefault();
      
    const currentDate = new Date();
      setToDos([...toDos,{
        task: task,
        status: status,
        
        date: currentDate.toLocaleString()
      }]);
      }}  
       >

 <label>Task </label>
 <input required type="text" value={task} onChange={(Event)=>{
  setTask(Event.target.value);
 }} />

 <select required value={status} onChange={(e) =>{
  setStatus(e.target.value);
 }}>
  <option value="completed">Completed</option>
  <option value="inCompleted">InCompleted</option>
  <option value="pending">Pending</option>

 </select>
 <button type="submit">Submit</button>
</form>
 
 <div>
  {toDos.map((toDosItem)=>{
    return(
      <div key={toDosItem} style={{display:"flex", gap:"50px"}}>
        <span>{toDosItem.task}</span>
        <span>{toDosItem.status}</span>
        <span>{toDosItem.date}</span>
      </div>
    )
  })}
 </div>
</div>

  )
      
  


}
 



