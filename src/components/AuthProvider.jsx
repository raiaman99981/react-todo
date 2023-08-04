import { createContext, useContext, useState } from "react";

 const AuthContext=createContext();
 
 export const useAuth=()=>useContext(AuthContext);
const AuthProvider=({children})=>{
   const[login,setLogin]=useState(false);

    return(
        <AuthContext.Provider value={{login,setLogin}}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;