import React from 'react'
import './Navbar.css'

import {useHistory,Link} from 'react-router-dom'

import {useLogout} from '../hooks/useLogout'
import {useAuthcontext} from '../hooks/useAuthcontext'




function Navbar() {


  const {logout}=useLogout()
  const context=useAuthcontext()
  const {user}=context

  

    const history=useHistory()
  return (
    <div className="navbar">

        <ul>
            <li className="title" onClick={()=>{history.push('/')}}>
            Expense Tracker

            </li>

          {!user &&  (<li>
                <Link to='/sign-in' >Login</Link>
                <Link to='/sign-up' >Signup</Link>
            </li>)}
                {  user && (    
                  <>
                 <h1>Hello,{user.displayName}</h1>
                  <li>
              {user && <button type='submit' className='btn' onClick={logout}>logout</button>}
            </li>
                  </>
                  )}
        </ul>
    </div>
  )
}

export default Navbar