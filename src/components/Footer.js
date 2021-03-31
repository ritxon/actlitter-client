import React, { Component } from "react";
import Link from "react-router-dom/Link";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-logo">
            <img src="../../logo_white.png" className="navlogo" />{" "}
            <h3>AcLitter</h3>
          </div>
          <div className="footer-links">
            <div className="footer-link-items">
              <h3>Explore More: </h3>
              <ul>
                <li>
                  <Link to="/impact_enviorment">Impact on Enviroment</Link>
                </li>
                <li>
                  <Link to="/impact_human_animal">
                    Impact on Human & Animals
                  </Link>
                </li>
                <li>
                  <Link to="/impact_classification">Litter Classification</Link>
                </li>
              </ul>
            </div>
            <div className="footer-link-items">
              <h3>Menu</h3>
              <ul>
                <li>
                  <Link to="/">Homepage</Link>
                </li>
                <li>
                  <Link to="/impact">Litter Information</Link>
                </li>
                <li>
                  <Link to="/quiz">Quiz</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">copyright @2020</div>
      </div>
    </>
  );
}

export default Footer;
