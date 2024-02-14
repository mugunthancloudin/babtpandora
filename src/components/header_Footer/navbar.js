import React from "react";
import logo from "../../assets/landingPage/logo.png";

import twitter from "../../assets/landingPage/twitter (2).png";
import telegram from "../../assets/landingPage/telegram.png";

export default function Navbar() {

    const twitterLink = "https://twitter.com/babypandora404";

  return (
    <>
      <div className="container-fluid pt-3 bg-black position-relative">
        <div className="row d-flex">
          <div className="col-lg-4">
            <img src={logo} alt="Logo" className="d-inline-block  logo" />
          </div>

          <div className="col-lg-8  text-end">
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <img
                src={twitter}
                alt="Logo"
                className="d-inline-block me-4 logo1"
              />
            </a>

            <img src={telegram} alt="Logo" className="d-inline-block  logo1" />
          </div>
        </div>
      </div>
    </>
  );
}
