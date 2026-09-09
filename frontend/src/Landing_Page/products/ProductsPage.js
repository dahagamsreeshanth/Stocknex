import React from "react";
import Hero from "./Hero";
import Leftsection from "./Leftsection";
import Rightsection from "./Rightsection";
import Universe from "./Universe";
import NavBar from "../Navbar";
import Footer from "../Footer";

export default function ProductsPage(){
    return (
     <>
     <NavBar/>
       <Hero/> 
        <Leftsection
         imageUrl="/Media/kite.png"
     productName="Kite"
      productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        />
         <Rightsection imageUrl="/Media/console.png" productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
         />
          <Leftsection
          imageUrl="/Media/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account.
           Enjoy the investment experience on your Android and iOS devices."
          />
        <Rightsection  imageUrl="/Media/kiteconnectapi.svg" productName="Kite Connect API" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        />
          <Leftsection imageUrl="/Media/varsity.png" productName="Varsity image" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations.
           Content is broken down into bite-size cards to help you learn on the go."/>
        <Universe/>
        <Footer/>

</>

        
    )
}