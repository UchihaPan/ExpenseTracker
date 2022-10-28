import React,{useState} from 'react'
import './Signin.css'
import {useLogin} from '../hooks/useLogin'


function Signin() {
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const {error,login,pending} =useLogin()


  const handlesubmit=(e)=>{
    e.preventDefault()

    login(email,password);
  }

  return (
    <form onSubmit={handlesubmit} className="login-form">
      <h2>Login</h2>
      <label >
      <span>Email:</span>

      <input type="email" onChange={(e)=>setemail(e.target.value)} />
      </label>
      <label >
      <span>Password:</span>

      <input type="password" onChange={(e)=>setpassword(e.target.value)} />
      </label>
      {!pending && <button className="btn">Login</button>}
      {pending && <button className='btn' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signin