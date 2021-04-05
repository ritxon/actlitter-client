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
                <h2>Aims</h2>
                <p>
                  The primary goal of Aclitter is to achieve maximum litter
                  awareness in Victoria by imparting key information and
                  knowledge about impact of litter in Australia. It aims to
                  provide students in Victoria with quality information through
                  articles and other interactive ways like quizzes to facilitate
                  better learning about litter impact to achieve efficient
                  litter disposal and effective waste management.
                </p>
              </div>
              {/* <div className="team-logo">
                <img src="../../logoWithName.jpg" />
              </div> */}
            </div>
          </div>
          <Cards />
        </div>
      </>
    );
  }
}

export default home;
