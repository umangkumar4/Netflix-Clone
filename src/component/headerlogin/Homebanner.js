import React from "react";
import Headerlogin from "./Headerlogin";
import{Link} from 'react-router-dom'
import "./homebanner.css";


function Homebanner() {
  return (
    <>
      <Headerlogin />
      <div className="full-width">
        <div className="text-container">
          <h1>Unlimited movies,TV</h1>
          <h1 className="shows">shows and more.</h1>
          <h2>Watch anywhere.Cancel anytime</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div>
            
            <Link to="/register">
            <button className="get-srt-btn">Get Started > </button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homebanner;
