import React, { useState } from "react";



const LoginComponent=()=>{
    const[heading,setHeading]=useState(false);
    const[secondHeading,setSecondHeading]=useState(false);
   
    const[input,setInput]=useState({
    email:"",
    password:""
    })

    const handleChange=(event)=>{
       const value=event.target.value;
       const name=event.target.name;
       setInput(()=>{
        return ({...input,[name]:value})
       }
     )
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(input.email==="aman@2002" && input.password==="123"){
            setHeading(true);
        }
        else{
            setSecondHeading(true);
        }
    }




    return(
        <>
       {heading && <h1>WELCOME</h1>}
       {secondHeading && <h1>AUTH FAILED</h1>}
    <form>
    <div class="mb-3 col-4 ms-5">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input onClick={()=>{
        setSecondHeading()
    }} onChange={handleChange}  name="email" value={input.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3 col-4 ms-5">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={handleChange} name="password" value={input.password} type="password" className="form-control" id="exampleInputPassword1"/>
    </div>
    <div className="mb-3 form-check col-4 ms-5">
    <input type="checkbox" className="form-check-input col-4 ms-5" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
    </form>
    </>
    );
}

export default LoginComponent;