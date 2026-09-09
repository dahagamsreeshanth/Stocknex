import React from "react";

export default function Stats() {
    return(
        <div className="container mt-4">
            <div className="row">
        
       
        <div className="col-6 ml-2 mt-5">   
            <h1 className="mb-4">Trust with confidence</h1>

            <h2 className="mb-4">Customer-first always</h2>
            <p >That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker;
                 contributing to 15% of daily retail exchange volumes in India.</p>
                 <br></br>
                 <h2 className="mb-4">No spam or gimmicks</h2>
                 <p>No gimmicks, spam, "gamification", or annoying push notifications.
                 High quality apps that you use at your pace, the way you like.</p>
                <br></br>
                <h2 className="mb-4">The Stocknex universe</h2>
                 <p>Not just an app, but a whole ecosystem. Our investments in
                     30+ fintech startups offer you tailored services specific to your needs.</p>
        </div>
         <div className="col-6 ">
            <img src="Media/ecosystem.png" alt="stats" style={{width: '100%', height: '100%'}}></img>
            <a href="#"  style={{ marginLeft:"80px",marginRight: "80px"  }} > Explore our Products  <i className="fa-solid fa-arrow-right-long"></i></a>
            <a href="#" style={{marginLeft:"90px"}} >  Try Kite Demo  <i className="fa-solid fa-arrow-right-long"></i></a>

        </div>


            </div>
            </div>
         
    )
}