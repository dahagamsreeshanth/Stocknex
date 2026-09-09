import React from "react";
import Hero from "./Hero";
import Charges from "./Charges.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

export default function PricingPage() {
    return(
        <>
            <Navbar/>
            <Hero />
            <Charges />
            <Footer/>
        </>
    )
}