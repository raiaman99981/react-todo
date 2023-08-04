import React from "react"
import { Link, useParams } from "react-router-dom";


const WelcomeComponent=()=>{
    const{username}=useParams();
    return(
        <>
      <h1>WELCOME {username}</h1>
      <Link to="/todo">LINK TO TODOS</Link>
      </>
    )
}

export default WelcomeComponent;