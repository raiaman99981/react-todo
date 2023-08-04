
import React from "react";
import { useAuth } from "./AuthProvider";


const Header=()=>{
    const auth=useAuth();
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">NWA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/todo">TODOS</a>
        </li>

      {auth.login ?  <li class="nav-item">
          <a class="nav-link" href="/logout">LOGOUT</a>
        </li> :
        <li class="nav-item">
          <a class="nav-link" href="/login">LOGIN</a>
        </li> }

      </ul>
    </div>
  </div>
</nav>
    )
}
export default Header;
