import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import "../App.css";
import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";

export class home extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <div className="homepage-w">
          <div className="team">
            <div className="team-flex">
              <div className="team-intro">
                <h1>OUR VISION</h1>
                <p>
                  The primary goal of Aclitter is to achieve maximum litter
                  awareness in Victoria by imparting key information and
                  knowledge about impact of litter in Australia.
                </p>
              </div>
            </div>
            {/* <div className="team-logo">
                <img src="../../logoWithName.jpg" />
              </div> */}
          </div>
          <Cards />
        </div>
      </>
    );
  }
}

export default home;
