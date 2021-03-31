import React, { Component } from "react";
import Link from "react-router-dom/Link";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-logo">
              <img src="../../logo.png" className="navlogo" /> <h1>AcLitter</h1>
            </div>
            <div className="footer-links">
              <div className="footer-link-items">
                <h2>Explore More</h2>
                <Link to="/data">Type of Litter</Link>
                <Link to="/quiz">Litter Information</Link>
                <Link to="/">How to reslove</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
