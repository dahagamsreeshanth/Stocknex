import React from "react";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Hero from "./Hero";
import Education from "./Education";
import OpenAccount from "../../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function HomePage() {
    return(
        <div className="HomePage">
            {/* <h1>HomePage</h1> */}
            <Navbar/>
            <Hero/>
            {/* <Awards/> */}
            <Stats/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            <Footer/>
            </div>
         
    )
}