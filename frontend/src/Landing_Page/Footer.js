import React from "react";

export default function Footer() {
  return (
    <div style={{justifyContent:"flex-bottom"}}>
    <div className="mt-3" style={{borderTop:"1px solid #b6adad",backgroundColor:"rgb(228, 228, 228)"}} >
    <div className="container" >
      <div className="row " style={{ marginTop:"30px"}}>
       
  <div className="col-2">

          <h2>Stocknex </h2>
          <p>© 2010 - 2026, Zerodha Broking Ltd.</p>
          <p>All rights reserved.</p>
            <div className="row">
                <div className="col">
          <img
            src="Media/appstoreBadge.svg"
            alt="appstore"
          />
          </div>
          <div className="col">
          <img
              src="Media/googlePlayBadge.svg"
              alt="playstore"  />
              </div>
          
            
          </div>
        </div>

        <div className="col-2 ms-5 me-3">
          <h2>Account</h2>
          <p>Open demat account</p>
          <p>Minor demat account</p>
          <p>NRI demat account</p>
          <p>HUF demat account</p>
          <p>Commodity</p>
          <p>Dematerialisation</p>
          <p>Fund transfer MTF</p>
        </div>

        <div className="col-2 ms-3 me-3">
          <h2>Support</h2>
          <p>Contact us</p>
          <p>Support portal</p>
          <p>How to file a complaint?</p>
          <p>Status of your complaints</p>
          <p>Bulletin</p>
          <p>Circular</p>
          <p>Z-Connect blog</p>
          <p>Downloads</p>
        </div>

        <div className="col-2 ms-4 me-4">
          <h2>Company</h2>
          <p>About</p>
          <p>Philosophy</p>
          <p>Press & media</p>
          <p>Careers</p>
          <p>Zerodha Cares (CSR)</p>
          <p>Zerodha.tech</p>
          <p>Open source</p>
          <p>Referral program</p>
        </div>

        <div className="col-2 ms-4" >
          <h2>Quick Links</h2>
  
          <p>Upcoming IPOs</p>
          <p>Brokerage charges</p>
          <p>Market holidays</p>
          <p>Economic calendar</p>
          <p>Calculators</p>
          <p>Markets</p>
          <p>Sectors</p>
          <p>Gift Nifty</p>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}