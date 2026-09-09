import React from "react";

export default function Education() {
    return(
        <div className="container mb-5">
          <div className="row">
            <div className="col">
                <img src="Media/education.svg" alt="education" ></img>
            </div>
            <div className="col mt-2">
                <h2>Free and open market education</h2>
                <br></br>
                <div>
                <p  style={{fontSize:"20px"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" style={{fontSize:"18px"}}>Varsity</a>
                    </div>
                    <div>
                <p  className="mt-3" style={{fontSize:"20px"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" style={{fontSize:"18px"}}>TradingQ&A</a>
                </div>  
            </div>
          </div>
            </div>
         
    )
}