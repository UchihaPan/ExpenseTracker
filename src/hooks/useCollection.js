import { useState,useEffect,useRef } from "react";
import {projectfirestore} from '../firebase/config'


export const useCollection=(collection,_query,_orderby)=>{

    const [documents,setdocuments]=useState([])
    const [error,seterror]=useState(null)

    const query=useRef(_query).current
    const orderBy=useRef(_orderby).current

    useEffect(()=>{

        let ref=projectfirestore.collection(collection)

        if(query){
            ref=ref.where(...query)
        }

        if(orderBy){
            ref=ref.orderBy(...orderBy)
        }
    const unsubscribe=ref.onSnapshot((snapshot)=>{
        let results=[]
        snapshot.docs.forEach(doc=>{
            results.push({...doc.data(),id:doc.id})
        })
        setdocuments(results)
        seterror(null)
    },(error)=>{
        seterror('could not detch the data')
    })


    return ()=>unsubscribe()

    },[collection,query,orderBy])


    return {documents,error}



}