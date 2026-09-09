import React from "react";

export default function Universe() {
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          textAlign: "center",
        }}
      >
        <h1>The Stocknex Universe</h1>
        <p className="text-muted" style={{ marginTop: "30px", fontSize: "20px" }} >
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      
      <div className="container" style={{ margin: "100px 0px 50px 300px" }}>
        
        <div className="row">
           <div className="col-4  ">
            <div className="card" style={{ width: "18rem" ,border:"none"}}>
              <img src="/Media/zerodhaFundhouse.png" className="card-img-top" alt="zerodhaFundhouse" />
              <div className="card-body">
                <p className="card-text">
                 Our assests management venture that is creating simple and transparent index funds to help you save for your goals.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4  ">
            <div className="card mt-2" style={{ width: "18rem" , border:"none"}}>
              <img src="/Media/sensibullLogo.svg" className="card-img-top" alt="sensibullLogo" />
              <br></br>
              <div className="card-body">
                <p className="card-text">
                    Options trading platform that lets you create strategies,analyze positions,and examine data points like open interest,fII/DII and more.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem",border:"none" }}>
              <img src="/Media/tijori.svg" className="card-img-top" alt="tijori" />
              <div className="card-body">
                <p className="card-text">
                  Investment research platform that offers detailed information on stocks sectors , supply chains and more. 
                </p>
              </div>
            </div>
          </div>
        </div>

         
        <div className="row mt-5" >
          <div className="col-4  ">
            <div className="card" style={{ width: "18rem",border:"none" }}>
              <img src="/Media/streakLogo.png" className="card-img-top" alt="streakLogo" />
              <div className="card-body">
                <p className="card-text">
                 Systematic trading platform that allows you to create and backtest strategies without any coding.
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "18rem",border:"none" }}>
              <img src="/Media/smallcaseLogo.png" className="card-img-top mb-3 mt-1" alt="smallcase" />
              <div className="card-body">
                <p className="card-text">
                 Thematic investment platform that helps you to invest in diversified backsets of stocks and ETFs. 
                </p> 
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "16rem",border:"none" }}>
              <img src="/Media/dittoLogo.png" className="card-img-top" alt="ditto" />
              <div className="card-body">
                <p className="card-text">
                 Personalized advice on life and healthinsurance. No spam or mis-selling.
                </p> 
              </div>
            </div>
          </div>
        </div >
        <button className="btn btn-primary mt-5 fs-5" style={{marginLeft:"500px"}}>Signup for free</button> 
         
      </div>
    </>
  );
}
