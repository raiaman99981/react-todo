import React from "react"
import { useParams } from "react-router-dom";


const WelcomeComponent=()=>{
    const{username}=useParams();
    return(
      <h1>WELCOME {username}</h1>
    )
}

export default WelcomeComponent;