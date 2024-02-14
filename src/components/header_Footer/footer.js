import React from "react";
import {Button } from "react-bootstrap";


export default function Footer() {

    const uniswapLink =
    "https://app.uniswap.org/swap?inputCurrency=ETH&outputCurrency=0x6bF8E2f3457D93140e0fb821BE1Cd01a23491419";

  const twitterLink = "https://twitter.com/babypandora404";

  const openSeaLink = "https://opensea.io/collection/babypandoraerc404";
  return (
    <>
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
    </>
  );
}
