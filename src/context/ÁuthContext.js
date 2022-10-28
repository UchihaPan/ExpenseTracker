import { createContext ,useReducer,useEffect} from "react";
import { projectauth } from "../firebase/config";


export const AuthContext=createContext()

export const authreducer=(state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {...state,user:action.payload}
        case 'LOGOUT':
                return {...state,user:null}
        case 'AUTH_IS_READY':
                return {...state,user:action.payload,authisready:true}
        default :
        return state
    }
}

const initialstate={
    user:null,
    authisready:false
} 


export const AuthContextProvider=({children})=>{

    const [state,dispatch]=useReducer(authreducer,initialstate)

useEffect(()=>{

  const unsub=  projectauth.onAuthStateChanged(
        (user)=>{
        dispatch({type:'AUTH_IS_READY',payload:user})
        unsub()
     
        })
       

},[])
    
 
    

    console.log(state.user)

return(
    <AuthContext.Provider value={{...state,dispatch}} >
        {children}
    </AuthContext.Provider>
)
}