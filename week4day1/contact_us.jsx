import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Swal from 'sweetalert2'
import React from 'react'

function App() {
  const [name, setName]= useState("");
  
  const [email, setEmail]= useState("");
  const [message, setMessage]= useState("");

  const handleSubmit =(event)=>{
    event.preventDefault();
    Swal.fire(
      "form submitted",
      `name:${name},email:${email}, message: ${message} `
    );
  };


  return (
    <React.Fragment>
    
      <div className='d' >
      <h1>contact us</h1>
     <form onSubmit={handleSubmit}>
     <input type="text" placeholder='name' required value={name} onChange={(event)=>{
       setName(event.target.value);

     }}   />
      
      <input type="email" placeholder='Email' required value={email}   onChange={(e)=>{ setEmail(e.target.value);}} />
      <textarea name="text_area" id="area" cols="30" rows="10" value={message}  required  onChange={(e)=>{ setMessage(e.target.value);}} >message</textarea>
      <input type="submit" value="submit" />
 

     </form> 
     
     </div>
    
    
     
</React.Fragment>
  )
}

export default App
