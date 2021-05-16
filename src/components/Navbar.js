import React, { Component } from "react";
import Link from "react-router-dom/Link";

import "./navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      varIcon: false,
    };
  }

  handleClick = () => {
    this.setState({
      varIcon: !this.state.varIcon,
    });
  };

  closeMobileMenu = () => {
    this.setState({
      varIcon: false,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            <img src="../../logo_white.png" className="navlogo" />
            <h2>AcLitter</h2>
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.varIcon ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </div>
        <ul className={this.state.varIcon ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/map"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              MAP
            </Link>
          </li>
          {/* litter info */}
          <li className="nav-item nav_laptop">
            <Link
              to="/impact"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              LITTER INFO
            </Link>
            <div className="nav-menu-sub">
              <ul>
                {/* <li>
                  <a href="/impact">Litter Info Summary</a>
                </li> */}
                <li>
                  <a href="/impact_enviorment">Impact on Environment</a>
                </li>
                <li>
                  <a href="/impact_human_animal">Impact on Humans and Animals</a>
                </li>
                <li>
                  <a href="/impact_classification">Litter Classification</a>
                </li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <Link
              to="/data"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              VISUALISATION
            </Link>
            <div className="nav-menu-sub">
              <ul>
                {/* <li>
                  <a href="/impact">Litter Info Summary</a>
                </li> */}
                <li>
                  <a href="/data/waste">Waste collected per year</a>
                </li>
                <li>
                  <a href="/data/items">Common location of litter</a>
                </li>
              </ul>
            </div>
          </li>
          {/* volunteer */}
          <li className="nav-item">
            <Link
              to="/quiz"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              QUIZ
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/volunteer"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              GET INVOLVED
            </Link>
            <div className="nav-menu-sub">
              <ul>
                <li>
                  <a href="/volunteer/beachpartol">BeachPatrol</a>
                </li>
                <li>
                  <a href="/volunteer/cleanupAu">Clean Up Australia</a>
                </li>
                <li>
                  <a href="/volunteer/keep_au_beautiful">Keep Australia Beautiful</a>
                </li>
                <li>
                  <a href="/volunteer/oceancrusaders">Ocean Crusaders</a>
                </li>
                <li>
                  <a href="/volunteer/tangaroaBlue">Tangaroa Blue</a>
                </li>
                <li>
                  <a href="/volunteer/yarrariver">Yarra Riverkeeper</a>
                </li>
              </ul>
            </div>
          </li>

          {/* <li className="nav-item">
            <Link
              to="/login"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              About Us
            </Link>
          </li> */}


          {/* pnhons view */}
          <div class="nav_box">
            <div className="nav_box_item_list">
              <input type="radio" name="rr" id="rr1" defaultChecked ></input>
              <input type="radio" name="rr" id="rr2"></input>
              <input type="radio" name="rr" id="rr3"></input>
              <div className="nav_box_item_1 ss1">
                <div class="nav_box-item">
                  <p class="nav_title"><a className="nav_title" href="/">HOME</a></p>
                </div>
                <div class="nav_box-item">
                  <p class="nav_title"><a className="nav_title" href="/map">MAP</a></p>
                </div>
                <label for="rr2" class="bar">
                  <div class="nav_box-item_trans">

                    <p class="nav_title">LITTER INFO</p>
                    <img
                      src="../../images/gallery_button_right_w.png"
                      className="nav_main_trans_img"
                    ></img>
                  </div>
                  <div className="clear_float"></div>
                </label>
                <div class="nav_box-item">
                  <p class="nav_title"><a className="nav_title" href="/data">VISUALISATION</a></p>
                </div>
                <div class="nav_box-item">
                  <p class="nav_title"><a className="nav_title" href="/quiz">QUIZ</a></p>
                </div>

                <label for="rr3" class="bar">
                  <div class="nav_box-item_trans ">
                    <p class="nav_title">GET INVOLVED</p>
                    <img
                      src="../../images/gallery_button_right_w.png"
                      className="nav_main_trans_img"
                    ></img>
                  </div>
                </label>


              </div>
              
              {/* litter info */}
              <div className="nav_box_item_2 ss2">
                <label for="rr1" class="bar">
                  <div className="nav_opyions_choose">
                    <img
                      src="../../images/gallery_button_left_w.png"
                      className="nav_trans_img"
                    ></img>
                    <p className="nav_opyion_text">
                      Main Menu
                                </p>
                  </div>
                  <ul class="nav_box-item-content">
                    <li>
                      <p className="nav_mobile_link">
                        <a className="nav_mobile_link" href="/impact">&emsp;Litter Info Summary</a></p>
                    </li>
                    <li>
                      <p className="nav_mobile_link">
                        <a className="nav_mobile_link" href="/impact_enviorment">&emsp;Impact on Environment</a></p>
                    </li>
                    <li>
                      <p className="nav_mobile_link">
                        <a className="nav_mobile_link" href="/impact_human_animal">&emsp;Impact on Humans and Animals</a></p>
                    </li>
                    <li>
                      <p className="nav_mobile_link">
                        <a className="nav_mobile_link" href="/impact_classification">&emsp;Litter Classification</a></p>
                    </li>
                  </ul>
                </label>
              </div>
              {/* volunteer */}
              <div className="nav_box_item_3 ss3">
                <label for="rr1" class="bar">
                  <div className="nav_opyions_choose">
                    <img
                      src="../../images/gallery_button_left_w.png"
                      className="nav_trans_img"
                    ></img>
                    <p className="nav_opyion_text">
                      Main Menu
                                </p>
                  </div>
                </label>
                <ul class="nav_box-item-content">
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer">&emsp;Volunteer Organizations</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/beachpartol">&emsp;BeachPatrol</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/cleanupAu">&emsp;Clean Up Australia</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/keep_au_beautiful">&emsp;Keep Australia Beautiful</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/oceancrusaders">&emsp;Ocean Crusaders</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/tangaroaBlue">&emsp;Tangaroa Blue</a></p>
                  </li>
                  <li>
                    <p className="nav_mobile_link">
                      <a className="nav_mobile_link" href="/volunteer/yarrariver">&emsp;Yarra Riverkeeper</a></p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ul>
      </nav>
      /*             <AppBar>
          <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to="/login" >Login</Button>
            <Button color="inherit" component={Link} to="/" >Home</Button>
            <Button color="inherit" component={Link} to="/signup" >Signup</Button>
          </Toolbar>
        </AppBar> */
    );
  }
}

export default Navbar;
