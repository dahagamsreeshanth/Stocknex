import Readct from "react";
export default function Leftsection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlaystore,
  appStore,
}) {
  return( 
  <>
  <div className="container" style={{  marginBottom: "50px" }}>
    <div className="row">
      <div className="col-6">
        <img src={imageUrl} className="mt-5"  style={{ width: "80%",height:"80%" }} />
        </div>
        <div className="col-6" style={{ textAlign: "left", marginTop: "50px" }}>
          <h1>{productName}</h1>
          <p className="text-muted" style={{ marginTop: "30px", fontSize: "20px" }} >{productDescription}</p>
          <div className="row">
          <a href="{tryDemo}" className="col ms-3">TryDemo</a>
           <a href="{learnMore}" className="col">LearnMore</a>
          </div>
          <div className="row mt-4">
         <a href={googlePlaystore} className="col"> <img src="/Media/googlePlayBadge.svg"  alt="googlePlaystore"/> </a>
           <a href=" " className="col"><img src="/Media/appstoreBadge.svg"  alt="appStore" /> </a>
          </div>
        

          </div>
    </div>
    </div>
  </>
  )
}
