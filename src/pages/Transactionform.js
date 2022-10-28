import React,{useState,useEffect} from 'react'
import {useFirestore} from '../hooks/useFirestore'


function Transactionform({uid}) {
    const [name,setname]=useState('')
    const [amount,setamount]=useState('')
    const {response,adddocument}=useFirestore('transactions')

    const handlesubmit=(e)=>{
        e.preventDefault()
        adddocument({uid,name,amount})
    }


    useEffect(()=>
    {
      if(response.success){
        setname('')
        setamount('')

      }

    },[response.success])

  return (
    <div>
    <h3>Add a transaction</h3>

    <form onSubmit={handlesubmit}>
    <label >
        <span>Name</span>
        <input type="text" value={name} onChange={e=>setname(e.target.value)} required />
    </label>
    <label >
        <span>Amount:</span>
        <input type="number" value={amount} onChange={e=>setamount(e.target.value)} required />
    </label>
    {!response.ispending && <button >Add a transaction</button>}
      {response.ispending && <button disabled>Loading...</button>}
    </form>


    </div>
  )
}

export default Transactionform