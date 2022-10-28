import { useReducer,useState,useEffect } from "react";
import {projectfirestore,timestamp} from '../firebase/config'



const initialstate={
    document:null,
    ispending:false,
    error:null,
    success:null
}

const firestoreReducer=(state,action)=>{
    switch(action.type){
        case 'IS_PENDING':
            return {document:null,ispending:true,success:null,error:null}
        case 'ADD_DOCUMENT':
            return {...state,document:action.payload,ispending:false,success:true}
            case 'DELETED_DOCUMENT':
                return {...state,document:null,ispending:false,success:true}
        case 'ERROR_MESSAGE':
            return {...state,document:null,ispending:false,success:null,error:action.payload}

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

        dispatch({type:'IS_PENDING'})
        try {

          const deletedref=  await ref.doc(id).delete()
            dispatchIfNotCancelled({type:'DELETED_DOCUMENT',payload:deletedref})



            
        } catch (error) {

            dispatchIfNotCancelled({type:'ERROR_MESSAGE',payload:error.message})

            
        }


        
    }

    useEffect(()=>{
        return()=>setcancelled(true)
    },[])


    return {response,adddocument,deletedocument}

}