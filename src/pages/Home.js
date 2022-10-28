import React from 'react'

import './Home.css'
import Transactionform from './Transactionform'
import TransactionList from './TransactionList'

import {useAuthcontext} from '../hooks/useAuthcontext'
import {useCollection} from '../hooks/useCollection'



function Home() {
  const context=useAuthcontext()
  const {user}=context
  const collection=useCollection('transactions',["uid","==",user.uid],["created_at","desc"])

  const {documents,error}=collection
  

  return (
    <div className="container">
      <div className="content">
       { error && <p>{error}</p>} 
       {documents.length <1 && <li>Nothing on your portfolio....</li>}
       { documents && <TransactionList documents={documents}/>}
       
      </div>
      <div className="sidebar">
    
      <Transactionform uid={user.uid}/>
      </div>
    </div>
  )
}

export default Home