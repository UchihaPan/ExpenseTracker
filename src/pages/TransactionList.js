import React from 'react'
import {useFirestore} from '../hooks/useFirestore'


function TransactionList({documents}) {
  const {deletedocument}=useFirestore('transactions')
  return (
   

   <div className="transactions">
    {documents.map((document)=>(
      <li key={document.id}>
        <div className="name">
          {document.name}
        </div>
        <div className="amount">
          {document.amount}
        </div>
      
        <button onClick={()=>deletedocument(document.id)} className="button">x</button>
         
        

      </li>
    ))}
   </div>
    
   
  )
}

export default TransactionList