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
                  <Link to="/data/waste">Waste collected per year</Link>
                </li>
                <li>
                  <Link to="/data/items">Common location of litter</Link>
                </li>
                <br />
                <li>
                  <Link to="/impact_enviorment">Impact on Environment </Link>
                </li>
                <li>
                  <Link to="/impact_human_animal">
                  Impact on Humans and Animals
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
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/data">VISUALISATION</Link>
                </li>
                <li>
                  <Link to="/impact">LITTER INFO</Link>
                </li>
                <li>
                  <Link to="/volunteer">GET INVOLVED</Link>
                </li>
                <li>
                  <Link to="/quiz">QUIZ</Link>
                </li>
                <li>
                  <Link to="/map">MAP</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">copyright @2021</div>
      </div>
    </>
  );
}

export default Footer;
