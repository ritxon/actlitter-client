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
        {/* logo + menu icon start*/}
        <div className="nav-container">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            <img src="../../logo.png" className="navlogo" /> AcLitter
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.varIcon ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
        </div>
        {/* logo + menu icon finish*/}
        {/* menu list start */}
        <ul className={this.state.varIcon ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/info"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Impact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/quiz"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Quiz
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/data"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Data
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link
              to="/login"
              className="nav-links"
              onClick={this.closeMobileMenu}
            >
              Login
            </Link>
          </li> */}
        </ul>
        {/* menu list finish */}
      </nav>
      //       <AppBar>
      //     <Toolbar className="nav-container">
      //         <Button color="inherit" component={Link} to="/login" >Login</Button>
      //         <Button color="inherit" component={Link} to="/" >Home</Button>
      //         <Button color="inherit" component={Link} to="/signup" >Signup</Button>
      //     </Toolbar>
      // </AppBar>
    );
  }
}

export default Navbar;
