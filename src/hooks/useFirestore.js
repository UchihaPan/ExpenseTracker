import { useReducer,useState,useEffect } from "react";
import {projectfirestore,timestamp,timestamp} from '../firebase/config'



const initialstate={
    document:null,
    ispending:false,
    error:null,
    success:null
}

const firestoreReducer=(state,action)=>{
    switch(action.type){
        case 'IS_PENDING':
            return {docment:null,ispending:true,success:null,error:null}
        case 'ADD_DOCUMENT':
                return {...state,docment:action.payload,ispending:false,success:true}
        case 'ERROR_MESSAGE':
                    return {...state,docment:null,ispending:false,success:null,error:action.payload}

        default:
            return state
    }
}

export const useFirestore=(colllection)=>{
    const [response,dispatch]=useReducer(firestoreReducer,initialstate)
    const [cancelled,setcancelled]=useState(false)

    const ref=projectfirestore.collection(colllection)

    const dispatchIfNotCancelled=(action)=>{
        if(!cancelled){

            dispatch(action)

        }
    }

    const adddocument= async(data)=>{

        dispatch({type:'IS_PENDING'})

        try {
            const created_at=timestamp.fromDate(new Date())
            const documentref= await ref.add({...data,created_at})
            dispatchIfNotCancelled({type:'ADD_DOCUMENT',payload:documentref})
            
        } catch (error) {
            dispatchIfNotCancelled({type:'ERROR_MESSAGE',payload:error.message})

            
        }

    }

    const deletedocument=async(id)=>{
        
    }

    useEffect(()=>{
        return()=>setcancelled(true)
    },[])


    return {response,adddocument,deletedocument}

}