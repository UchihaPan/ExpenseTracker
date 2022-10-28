import React,{useState} from 'react'


function Transactionform() {
    const [name,setname]=useState('')
    const [amount,setamount]=useState('')

    const handlesubmit=e=>{
        e.preventDefault()
        

       console.log({name,amount})
    }

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
    <button type='submit'>Add a transaction</button>
    </form>


    </div>
  )
}

export default Transactionform