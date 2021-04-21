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
          {/* litter info */}
          <li className="nav-item">
            <Link
              to="/impact"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              LITTER INFO
            </Link>
            <div className="nav-menu-sub">
              <ul>
                <li>
                  <a href="/impact_human_animal">Impact on human& animal</a>
                </li>
                <li>
                  <a href="/impact_enviorment">Impact on envirment</a>
                </li>
                <li>
                  <a href="/impact_classification">Litter classification</a>
                </li>
              </ul>
            </div>
          </li>
          {/* volunteer */}
          <li className="nav-item">
            <Link
              to="/volunteer"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              VOL.
            </Link>
            <div className="nav-menu-sub">
              <ul>
                <li>
                  <a href="/volunteer/tangaroaBlue">Tangaroa Blue</a>
                </li>
                <li>
                  <a href="/volunteer/yarrariver">Yarra Riverkeeper</a>
                </li>
                <li>
                  <a href="/volunteer/keep_au_beautiful">Keep Australia Beautiful</a>
                </li>
                <li>
                  <a href="/volunteer/cleanupAu">Clean Up Australia</a>
                </li>
                <li>
                  <a href="/volunteer/beachpartol">Beach Patrol</a>
                </li>
              </ul>
            </div>
          </li>

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
              to="/map"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              MAP
            </Link>
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
