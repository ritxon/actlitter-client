import React, { Component } from "react";
import Link from "react-router-dom/Link";
import "./footer.css";

function Footer() {
  return (
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
          <div className="footer-link-items">
            <h2>Explore More</h2>
            <Link to="/data">Type of Litter</Link>
            <Link to="/quiz">Litter Information</Link>
            <Link to="/">How to reslove</Link>
          </div>
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/data">Team Aims</Link>
            <Link to="/data">Team Logo</Link>
          </div>
        </div>
      </div>
      {/* <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="socail-logo">
              AcLitter<i className="fab fa-typo3"></i>
            </Link>
          </div>
          <small className="website-rights"> Litter Action @2020 </small>
          <div className="social-icons">
            <Link
              className="social-icon-link facebook"
              to="/"
              target="blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link facebook"
              to="/"
              target="blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link
              className="social-icon-link instagram"
              to="/"
              target="blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Footer;
