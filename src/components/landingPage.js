import React from "react";
import "./landingPage.css"; // Make sure to import your custom CSS file
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import title from "../assets/landingPage/dedino font-01.svg";
import mainpic from "../assets/landingPage/Dedino Image-01.svg";
import Home from "./landingPage/home";
import Navbar from "./header_Footer/navbar";
import Footer from "./header_Footer/footer";

export default function LandingPage() {
  return (
   <>
   <Navbar/>
   <Home/>
   <Footer/>
   </>
  );
}
