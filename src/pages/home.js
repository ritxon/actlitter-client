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
        <div className="team">
          <div className="team-flex">
            <div className="team-intro">
              <h2>Aims</h2>
              <p>
                this is the part to intro our team aimsthis is the part to intro
                our team aimsthis is the part to intro our team aimsthis is the
                part to intro our team aimsthis is the part to intro our team
                aimsthis is the part to intro our team aimsthis is the part to
                intro our team aimsthis is the part to intro our team aimsthis
                is the part to intro our team aimsthis is the part to intro our
                team aimsthis is the part to intro our team aimsthis is the part
                to intro our team aims,
              </p>
            </div>
            <div className="team-logo">
              <img src="../../logo_green.png" />
            </div>
          </div>
        </div>
        <Cards />
      </>
    );
  }
}

export default home;
