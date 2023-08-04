import React from "react";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const navigate=useNavigate();
    const {setLogin}=useAuth();
    return(
        <button onClick={()=>{
            setLogin(false);
            navigate("/login")
        }}>LOGGED OUT</button>
    )
}

export default Logout;