import React from "react";
import Hero from "./Hero.js";
import CreateTicket from "./CreateTicket.js";
import Navbar from "../Navbar.js";
import Footer from "../Footer.js";

export default function SuportPage(){
    return (
        <div className="SupportPage">
            <Navbar/>
            <Hero />
            <CreateTicket />
            <Footer/>
        </div>
    )
}