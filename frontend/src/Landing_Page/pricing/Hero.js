import React from "react";

export default function Hero() {
  return (
    <>
      <div
        style={{ textAlign: "center", marginTop: "80px", marginBottom: "40px" }}
      >
        <h1>Charges</h1>
        <h4 >List of Charges</h4>
      </div>

      <div className="container mb-5">
        <div className="row"  style={{marginBottom:"80px"}}>
        <div class="card col" style={{border:"none"}} >
          <img src="/Media/pricing0.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Free equity delivery</h3>
            <p class="card-text"style={{fontSize:"20px"}} >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
            </p>
             
          </div>
        </div>

        <div class="card col" style={{border:"none",marginLeft:"50px" ,marginRight:"50px"}} >
          <img src="/Media/intradayTrades.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Intraday and F&O trades</h3>
            <p class="card-text" style={{fontSize:"20px"}}>
             Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
            </p>
          </div>
        </div>

        <div class="card col" style={{border:"none"}} >
          <img src="/Media/pricing0.svg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h3 class="card-title">Free direct MF</h3>
            <p class="card-text" style={{fontSize:"20px"}}>
             All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
