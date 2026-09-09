import React from "react";

export default function Navbar() {
    return(
        <div className="NavBar mt-2" style={{borderBottom: "1px   #b6adad" }}>
             <nav class="navbar navbar-expand-lg bg-body-tertiary bg-light" style={{backgroundColor:"rgb(252, 252, 252)"}} >
  <div class="container-fluid">
    <a class="navbar-brand" href="/" style={{marginLeft:"140px"}}><h2>Stocknex</h2></a>
    
    <div class="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "flex-end",marginRight:"200px"}}>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/signup" style={{fontSize:"22px",marginLeft:"8px",marginRight:"8px"}}>Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about" style={{fontSize:"22px",marginLeft:"8px",marginRight:"8px"}}>About</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/products" style={{fontSize:"22px",marginLeft:"8px",marginRight:"8px"}}>Products</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/pricing" style={{fontSize:"22px",marginLeft:"8px",marginRight:"8px"}}>Pricing</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="/support" style={{fontSize:"22px",marginLeft:"8px",marginRight:"8px"}}>Support</a>
        </li>

      
      </ul>
    </div>
  </div>
</nav>
            </div>
         
    )
}