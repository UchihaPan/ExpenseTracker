import {useAuthcontext} from '../hooks/useAuthcontext'
import {projectauth} from '../firebase/config'
import { useState,useEffect} from 'react'
import { useHistory} from "react-router-dom"




export const useLogin=()=>{
    const [cancelled,setcancelled]=useState(false)
    const [error,seterror]=useState(null)
    const [pending,setpending]=useState(false)
    const context=useAuthcontext()
    const {dispatch}=context
    const history=useHistory()

    const login=async(email,password)=>{
        seterror(null)
        setpending(true)
        try {
         const res=   await projectauth.signInWithEmailAndPassword(email,password)
       

            if(res.user){
                dispatch({type:'LOGIN',payload:res.user})
                setpending(false)
                history.push('/')
                
            }else{

                setpending(false)

                throw new Error('Cant login wwith above credentials')
                
                
            }
            if(!cancelled){
                seterror(null)
            setpending(false)
            }
            
            
        } catch (error) {
            if(!cancelled){

            seterror(error.message)
            setpending(false)}
            
        }
    }

    useEffect(() => {
    
        return () => {
          setcancelled(true)
        }
      }, [])

    return {login,pending,error}



    

}