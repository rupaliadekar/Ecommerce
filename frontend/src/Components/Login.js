import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login= () => {
const [email, setEmail]= React.useState('');
const [password, setPassword] = React.useState('');

const navigate = useNavigate();

const handleLogin = async () => {

console.warn("email, password", email, password)

let result = await fetch('http://localhost:5000/login',{
  method:'post',
  body: JSON.stringify({email,password}),
  headers: {

   'Content-Type': 'application/json'

}

})

result = await result.json();

console.warn(result)

if(result.name) { 
    localStorage.setItem("user", JSON.stringify(result)); 
navigate("/")

}else{ alert("please enter connect details")

}
}}

export default Login;