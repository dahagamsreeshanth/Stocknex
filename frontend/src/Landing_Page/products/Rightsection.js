import React from "react";

export default function Rightsection({imageUrl,
  productName,
  productDescription,
  tryDemo}) {
    return(
        <>
        <div className="container"  >
    <div className="row">
      
        <div className="col-6" style={{ textAlign: "left"}}>
          <h1 style={{marginTop:"30px"}}>{productName}</h1>
          <p className="text-muted" style={{ marginTop: "30px", fontSize: "20px" }} >{productDescription}</p>
          <div className="row">
           <a href="{learnMore}" className="col">LearnMore</a>
          </div>
          </div>
             <div className="col-6">
        <img src={imageUrl}   style={{ width: "80%",height:"80%" }} />
        </div>

          </div>
          </div>
        </>

       
    )
}