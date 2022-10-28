import { useState ,useEffect} from "react"
import {projectauth} from '../firebase/config'

import {useHistory} from 'react-router-dom'
import {useAuthcontext} from '../hooks/useAuthcontext'


export const useSignup=()=>{
    const [cancelled,setcancelled]=useState(false)

    const [error,seterror]=useState(null)
    const [pending,setpending]=useState(false)
    const context=useAuthcontext()
    const {dispatch}=context
    const history=useHistory()



    const signup=async(email,password,name)=>{
        seterror(null)
        setpending(true)
      try  {

        const res=await projectauth.createUserWithEmailAndPassword(email,password)
        
        
      

        if(!res){
            throw new Error('Something is wrong')
        }
        await res.user.updateProfile({displayName:name})
        dispatch({type:'LOGIN',payload:res.user})
        setpending(false)
        history.push('/')
        if(!cancelled){
            seterror(null)
        setpending(false)
        }
        
        }catch(error){

            if(!cancelled){

                console.log(error.message)
                seterror(error.message)
                setpending(false)}



        }
    }


    useEffect(() => {
    
        return () => {
          setcancelled(true)
        }
      }, [])



    return {error,signup,pending}

}

