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
						<i className={this.state.varIcon ? "fas fa-times" : "fas fa-bars"} />
					</div>
				</div>
				<ul className={this.state.varIcon ? "nav-menu active" : "nav-menu"}>
					<li className="nav-item">
						<Link to="/" className="nav-links" onClick={this.closeMobileMenu}>
							HOME
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/map" className="nav-links" onClick={this.closeMobileMenu}>
							MAP
						</Link>
					</li>
					{/* litter info */}
					<li className="nav-item nav_laptop">
						<Link to="/impact" className="nav-links" onClick={this.closeMobileMenu}>
							LITTER INFO
						</Link>
						<div className="nav-menu-sub">
							<ul>
								{/* <li>
                  <Link to="/impact">Litter Info Summary</Link>
                </li> */}
								<li>
									<Link to="/impact_enviorment">Impact on Environment</Link>
								</li>
								<li>
									<Link to="/impact_human_animal">Impact on Humans and Animals</Link>
								</li>
								<li>
                  {/* This is the change Max  */}
									<Link to="/impact_classification">Litter Classification</Link>
								</li>
							</ul>
						</div>
					</li>
					<li className="nav-item">
						<Link to="/data" className="nav-links" onClick={this.closeMobileMenu}>
							VISUALISATION
						</Link>
						<div className="nav-menu-sub">
							<ul>
								{/* <li>
                  <Link href="/impact">Litter Info Summary</Link>
                </li> */}
								<li>
									<Link to="/data/waste">Waste collected per year</Link>
								</li>
								<li>
									<Link to="/data/items">Common location of litter</Link>
								</li>
							</ul>
						</div>
					</li>
					{/* volunteer */}
					<li className="nav-item">
						<Link to="/quiz" className="nav-links" onClick={this.closeMobileMenu}>
							QUIZ
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/volunteer" className="nav-links" onClick={this.closeMobileMenu}>
							GET INVOLVED
						</Link>
						<div className="nav-menu-sub">
							<ul>
								<li>
									<Link to="/volunteer/beachpartol">BeachPatrol</Link>
								</li>
								<li>
									<Link to="/volunteer/cleanupAu">Clean Up Australia</Link>
								</li>
								<li>
									<Link to="/volunteer/keep_au_beautiful">Keep Australia Beautiful</Link>
								</li>
								<li>
									<Link to="/volunteer/oceancrusaders">Ocean Crusaders</Link>
								</li>
								<li>
									<Link to="/volunteer/tangaroaBlue">Tangaroa Blue</Link>
								</li>
								<li>
									<Link to="/volunteer/yarrariver">Yarra Riverkeeper</Link>
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
							<input type="radio" name="rr" id="rr1" defaultChecked></input>
							<input type="radio" name="rr" id="rr2"></input>
							<input type="radio" name="rr" id="rr3"></input>
							<div className="nav_box_item_1 ss1">
								<div class="nav_box-item">
									<p class="nav_title">
										<Link className="nav_title" to="/" onClick={this.closeMobileMenu}>
											HOME
										</Link>
									</p>
								</div>
								<div class="nav_box-item">
									<p class="nav_title">
										<Link className="nav_title" to="/map" onClick={this.closeMobileMenu}>
											MAP
										</Link>
									</p>
								</div>

								<label for="rr2" class="bar">
									<div class="nav_box-item_trans">
										<p class="nav_title">LITTER INFO</p>
										<img src="../../images/gallery_button_right_w.png" className="nav_main_trans_img"></img>
									</div>
									<div className="clear_float"></div>
								</label>
								<div class="nav_box-item">
									<p class="nav_title">
										<Link className="nav_title" to="/data" onClick={this.closeMobileMenu}>
										VISUALISATION
										</Link>
									</p>
								</div>
								<div class="nav_box-item">
									<p class="nav_title">
										<Link className="nav_title" to="/quiz" onClick={this.closeMobileMenu}>
											QUIZ
										</Link>
									</p>
								</div>
								<label for="rr3" class="bar">
									<div class="nav_box-item_trans ">
										<p class="nav_title">GET INVOLVED</p>
										<img src="../../images/gallery_button_right_w.png" className="nav_main_trans_img"></img>
									</div>
								</label>


							</div>

							{/* litter info */}
							<div className="nav_box_item_2 ss2">
								<label for="rr1" class="bar">
									<div className="nav_opyions_choose">
										<img src="../../images/gallery_button_left_w.png" className="nav_trans_img"></img>
										<p className="nav_opyion_text">Main Menu</p>
									</div>
									<ul class="nav_box-item-content">
										<li>
											<p className="nav_mobile_link">
												<Link className="nav_mobile_link" to="/impact" onClick={this.closeMobileMenu}>
													&emsp;Litter Info Summary
												</Link>
											</p>
										</li>
										<li>
											<p className="nav_mobile_link">
												<Link className="nav_mobile_link" to="/impact_enviorment" onClick={this.closeMobileMenu}>
													&emsp;Impact on Environment
												</Link>
											</p>
										</li>
										<li>
											<p className="nav_mobile_link">
												<Link className="nav_mobile_link" to="/impact_human_animal" onClick={this.closeMobileMenu}>
													&emsp;Impact on Humans and Animals
												</Link>
											</p>
										</li>
										<li>
											<p className="nav_mobile_link">
												<Link className="nav_mobile_link" to="/impact_classification" onClick={this.closeMobileMenu}>
													&emsp;Litter Classification
												</Link>
											</p>
										</li>
									</ul>
								</label>
							</div>
							{/* volunteer */}
							<div className="nav_box_item_3 ss3">
								<label for="rr1" class="bar">
									<div className="nav_opyions_choose">
										<img src="../../images/gallery_button_left_w.png" className="nav_trans_img"></img>
										<p className="nav_opyion_text">Main Menu</p>
									</div>
								</label>
								<ul class="nav_box-item-content">
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer" onClick={this.closeMobileMenu}>
												&emsp;Volunteer Organizations
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/beachpartol" onClick={this.closeMobileMenu}>
												&emsp;BeachPatrol
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/cleanupAu" onClick={this.closeMobileMenu}>
												&emsp;Clean Up Australia
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/keep_au_beautiful" onClick={this.closeMobileMenu}>
												&emsp;Keep Australia Beautiful
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/oceancrusaders" onClick={this.closeMobileMenu}>
												&emsp;Ocean Crusaders
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/tangaroaBlue" onClick={this.closeMobileMenu}>
												&emsp;Tangaroa Blue
											</Link>
										</p>
									</li>
									<li>
										<p className="nav_mobile_link">
											<Link className="nav_mobile_link" to="/volunteer/yarrariver" onClick={this.closeMobileMenu}>
												&emsp;Yarra Riverkeeper
											</Link>
										</p>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</ul>
			</nav>
			/*             <LinkppBar>
          <Toolbar className="nav-container">
            <Button color="inherit" component={Link} to="/login" >Login</Button>
            <Button color="inherit" component={Link} to="/" >Home</Button>
            <Button color="inherit" component={Link} to="/signup" >Signup</Button>
          </Toolbar>
        </LinkppBar> */
		);
	}
}

export default Navbar;
