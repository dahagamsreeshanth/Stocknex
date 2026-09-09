import React from "react";

export default function Pricing() {
    return(
        <div className="container ">
            <div className="row">
                <div className="col-5" style={{marginTop:"0 px", padding:"80px"}} >
                 <h1>Unbeatable pricing</h1>
            <p style={{fontSize:"20px"}}>We pioneered the concept of discount 
                broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href="#">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div className="col-7" style={{marginTop:"100px" }} >
                    <div className="row"  >   
                         
                            <img src ="Media/pricing0.svg" alt="pricing" className="col-1"  style={{width:"20%"}}></img>
                        <p className=" col-1 mt-4 " style={{fontSize:"12px", marginLeft:"0px"}}>Free account opening</p>
                        
                        
                             <img src ="Media/pricing0.svg" alt="pricing" className="col-1" style={{width:"20%"}}></img>
                           <p className="col-2 mt-4 " style={{fontSize:"12px"  }}>Free equity delivery and direct mutual funds</p>
                        
                          
                          <img src ="Media/intradayTrades.svg" alt="pricing" className="col-1" style={{width:"20%"}}></img>
                           <p className="col-1 mt-4" style={{fontSize:"12px"}}>Intraday and F&O</p>
                           
                    </div>
                </div>
                </div>
           
            </div>
         
    )
}