import { AuthContext } from "../context/ÁuthContext";

import { useContext } from "react";


export const useAuthcontext=()=>{
    const context= useContext(AuthContext)

    return context
}