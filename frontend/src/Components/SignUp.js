import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
     if(auth){
       navigate('/')
     } 
  },[])

  const collectData= async ()=>{
    console.warn(name, email, password);
    let result =await fetch('http://localhost:5000/register', {
        method:'post',
        body:JSON.stringify({name, email, password}),
        headers:{
            'Content-Type':'application/json'
        },
    });

     result = await result.json()
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    navigate('/')
  }

  return (
    <div className='register'>
      <h1>Register</h1>
      <form action="" >
         <input className='input' type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} id="" placeholder='Enter Your Name' />
         <input className='input' type="email" name="mail" value={email} onChange={(e)=>setEmail(e.target.value)}  id="" placeholder='Enter Email' />
         <input className='input' type="password" name="pass" value={password} onChange={(e)=>setPassword(e.target.value)}  id="" placeholder='Enter Password' />
         <button type='button' className='appButton'> SignUp</button>
      </form>
    </div>
  )
}

export default SignUp
