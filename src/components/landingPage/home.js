import React from "react";
import "./home.css";
import ethLogo from "../../assets/landingPage/ETH logo.svg";
import pandora from "../../assets/landingPage/Bpandora.svg";

export default function Home() {
  return (
    <>
      <div className="container-fluid pb-5 bg-black">
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
        <div
          className="text-center text-white"
          style={{ fontFamily: "'Segoe', sans-serif", fontWeight: 400 }}
        >
          <div className="">
            <img src={pandora} alt="titleImg" className="pandoraLogo pb-5" />
            <span className="babyPandora">BABY PANDORA</span>
          </div>
          <div className="forkingOf">FORKING</div>
          <div className="d-flex justify-content-center">
            <img src={pandora} alt="titleImg" className="pandoraLogo me-2" />
            <div>
              <div className="pandora">PANDORA</div>
              <div className="d-flex justify-content-center text-center">
                <div className="erc">
                  <img src={ethLogo} alt="titleImg" className="ethLogo me-2" />
                  ERC 404
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="text-center">
          <img
            src={mainpic}
            alt="Main"
            className="img-fluid d-block mx-auto pb-5"
            style={{ width: "75%" }}
          />
        </div> */}
    </>
  );
}
