import {useAuthcontext} from '../hooks/useAuthcontext'
import {projectauth} from '../firebase/config'
import { useState,useEffect} from 'react'



export const useLogout=()=>{
    const [cancelled,setcancelled]=useState(false)

    const [error,seterror]=useState(null)
    const [pending,setpending]=useState(false)
    const context=useAuthcontext()
    const {dispatch}=context

    const logout=async()=>{
        seterror(null)
        setpending(true)
        try {
            await projectauth.signOut()

            dispatch({type:'LOGOUT'})
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

    return {logout,setpending,error}



    

}