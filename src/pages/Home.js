import React from 'react'

import './Home.css'
import Transactionform from './Transactionform'

function home() {
  return (
    <div className="container">
      <div className="content">
        transaction-list
       
      </div>
      <div className="sidebar">
      <Transactionform/>
      </div>
    </div>
  )
}

export default home