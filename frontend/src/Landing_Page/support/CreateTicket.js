import React from "react";

export default function CreateTicket() {
    return(
      <>
      <div className="container mt-5" >
        <div className="row"style={{marginTop:"100px", marginBottom:"50px"}}>
            <div className="col" style={{fontSize:"25px"}}>
                Account Opening
                <ul>
                    <li style={{fontSize:"25px"}} ><a href="">Resident individual</a></li>
                    <li style={{fontSize:"25px"}}><a href="">Minor</a></li>
                    <li style={{fontSize:"25px"}}><a href="">NRI</a></li>
                    <li style={{fontSize:"25px"}}><a href="">Company</a></li>
                </ul>
            </div>
              <div className="col" style={{fontSize:"25px"}}>
                Your Zerodha Account
                <ul>
                    <li style={{fontSize:"25px"}} ><a href="">Resident individual</a></li>
                    <li style={{fontSize:"25px"}}><a href="">Minor</a></li>
                    <li style={{fontSize:"25px"}}><a href="">NRI</a></li>
                    <li style={{fontSize:"25px"}}><a href="">Company</a></li>
                </ul>
              </div>
                <div className="col" style={{fontSize:"25px"}}>
                   Account Opening
                <ul>
                    <li><a href="">Resident individual</a></li>
                    <li><a href="">Minor</a></li>
                    <li><a href="">NRI</a></li>
                    <li><a href="">Company</a></li>
                </ul>
                </div>
        </div>
      </div>
      </>
    )
}