import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import mainpic from "../assets/landingPage/logo.png";
import title from "../assets/landingPage/bpandora font.svg";
import logo from "../assets/landingPage/logo.png";
import twitter from "../assets/landingPage/twitter (2).png";
import telegram from "../assets/landingPage/telegram.png";

export default function Test() {
  const uniswapLink =
    "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6bF8E2f3457D93140e0fb821BE1Cd01a23491419";

  const twitterLink = "https://twitter.com/babypandora404";

  const openSeaLink = "https://opensea.io/collection/babypandoraerc404";

  return (
    <div className="App">
      

      <Container fluid className=" pt-3 bg-black position-relative">
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
      </Container>

      <Container fluid className=" bg-black position-relative">
        <div
          className="text-center text-white  pt-3"
          style={{ fontFamily: "'Press Start 2P', cursive" }}
        >
          <h1 className="">reject evolution,</h1>
          <p className="mt-3">return to bPandora.</p>
          <p className="text-break mt-3">
            CA: 0xd555498a524612c67f286df0e0a9a64a73a7cdc7
          </p>
        </div>
        <img src={title} alt="titleImg" className="mt-4 mb-4" />

        <div className="text-center">
          <img
            src={mainpic}
            alt="Main"
            className="img-fluid d-block mx-auto pb-5"
            style={{ width: "75%" }}
          />
        </div>
      </Container>

      <div className="fixed-bottom bg-black d-flex justify-content-end p-3">
        <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-light" size="sm" className="mr-2">
            About
          </Button>
        </a>
        <a href={openSeaLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-success" size="sm" className="mx-2">
            BUY bPandora ON OPENSEA
          </Button>
        </a>

        <a href={uniswapLink} target="_blank" rel="noopener noreferrer">
          <Button variant="outline-success" size="sm" className="ml-2">
            BUY bPandora ON UNISWAP
          </Button>
        </a>
      </div>

    </div> 
  );
}
