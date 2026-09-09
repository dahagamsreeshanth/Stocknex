import React from "react";

export default function Hero() {
    return(
       <div className="container p-5 mb-6">
        <div className="row  text-center">
             <img src="/Media/homeHero.png" alt="Hero Image" className="hero-image" className="mb-5" />
              <h1>Invest in your future with Stocknex</h1>
             <p>Stocknex is a leading online investment platform that empowers individuals to invest in stocks, ETFs, and other financial instruments with ease and confidence.  </p>
             <button className="hero-button p-3 btn btn-primary"  style={{width: '20%',margin:"0 auto"}}>SignUp Now</button>
             </div>
             
            

        </div>
         
    )
}