import React, { Component } from "react";
import Link from "react-router-dom/Link";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        {/* <section className="footer-subscription">
        <p className="footer-subsciption-heading">
          Jonjin the adventure newsletterdcfv
        </p>
        <p className="footer-subsciption-text">
          you can unscurbscrube at any time
        </p>
        <div className="input-area">
          <form>
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="footer-input"
            ></input>
            <button buttonstyle="btn--outline">Subscribe</button>
          </form>
        </div>
      </section> */}
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
              {/* <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/data">Team Aims</Link>
              <Link to="/data">Team Logo</Link>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
