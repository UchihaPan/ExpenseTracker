import React ,{useState}from 'react'
import './Signup.css'
import {useSignup} from '../hooks/useSignup'


function Signup() {
  const [email,setemail]=useState('')
  const [name,setname]=useState('')
  const [password,setpassword]=useState('')
  const {error,signup,pending} =useSignup()




  const handlesubmit=(e)=>{
    e.preventDefault()
    

    signup(email,password,name);
  }

  return (
    <form onSubmit={handlesubmit} className="signup-form">
      <h2>SignUp</h2>
      <label >
      <span>Name:</span>

      <input type="text"  onChange={(e)=>setname(e.target.value)} />
      </label>

      <label >
      <span>Email:</span>

      <input type="email"  onChange={(e)=>setemail(e.target.value)} />
      </label>
      <label >
      <span>Password:</span>

      <input type="password"  onChange={(e)=>setpassword(e.target.value)} />
      </label>
     {!pending && <button className="btn">Signup</button>}
      {pending && <button className='btn' disabled>Loading...</button>}
      {error && <p>{error}</p>}
    </form>
  )
}

export default Signup