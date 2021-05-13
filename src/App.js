import React, { Component } from "react";
import ScrollToTop from "./components/ScrollToTop"; // to scroll to top
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./base.css";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Pages
import Home from "./pages/home";
import login from "./pages/login";
import quiz from "./pages/quiz";
import info from "./pages/info";
import impact_enviorment from "./pages/impact_enviorment";
import impact_human_animal from "./pages/impact_human_animal";
import impact_classification from "./pages/impact_classification";
import impact from "./pages/impact";
import map from "./pages/map";
import data from "./pages/data";
import waste from "./pages/data/waste"
import items from "./pages/data/items"
import notFound from "./pages/notFound";
import treePage from "./pages/treePage";
import volunteer from "./pages/volunteer/volunteer";
import tangaroaBlue from "./pages/volunteer/tangaroaBlue";
import yarrariver from "./pages/volunteer/yarra_river_keeper";
import keep_au_beautiful from "./pages/volunteer/keep_au_beautiful";
import cleanupAu from "./pages/volunteer/cleanupAu";
import beachpartol from "./pages/volunteer/beachpartol";
import oceancrusaders from "./pages/volunteer/oceancrusaders";

import Button from "./components/utils/Button";

axios.defaults.baseURL =
  "https://us-central1-actlitter-backend.cloudfunctions.net/api";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "off",
      input: "input",
      pass: "sdfsd",
    };
  }

  clickLogin = () => {
      this.setState({
        value: "in"
      });
    }
  

  render() {
    if (this.state.value == "in"){
      return (
        <>
          <div className="App">
            <Router>
              <ScrollToTop>
                <Navbar />
                <div className="container">
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={login} />
                    <Route exact path="/quiz" component={quiz} />
                    <Route exact path="/data" component={data} />
                    <Route exact path="/info" component={info} />
                    <Route exact path="/impact" component={impact} />
                    <Route exact path="/map" component={map} />
                    <Route exact path="/treePage" component={treePage} />
                    <Route exact path="/impact_enviorment" component={impact_enviorment}/>
                    <Route
                      exact
                      path="/impact_human_animal"
                      component={impact_human_animal}
                    />
                    <Route
                      exact
                      path="/impact_classification"
                      component={impact_classification}
                    />
                    <Route exact path="/volunteer" component={volunteer} />
                    <Route
                      exact
                      path="/volunteer/tangaroaBlue"
                      component={tangaroaBlue}
                    />
                    <Route
                      exact
                      path="/volunteer/yarrariver"
                      component={yarrariver}
                    />
                    <Route
                      exact
                      path="/volunteer/keep_au_beautiful"
                      component={keep_au_beautiful}
                    />
                    <Route
                      exact
                      path="/volunteer/cleanupAu"
                      component={cleanupAu}
                    />
                    <Route
                      exact
                      path="/volunteer/beachpartol"
                      component={beachpartol}
                    />
                    <Route
                      exact
                      path="/volunteer/oceancrusaders"
                      component={oceancrusaders}
                    />
                    <Route
                      exact
                      path="/data/waste"
                      component={waste}
                    />
                    <Route
                      exact
                      path="/data/items"
                      component={items}
                    />
                    <Route exact component={notFound} />
                  </Switch>
                </div>
                <Footer />
              </ScrollToTop>
            </Router>
          </div>
        </>
      );

    }else{
      return(
        <>
        <div></div>
        <input type="text" value={this.state.pass} />
        <Button styleBtn="primary quiz-btn" text="Login" onClick={() => this.clickLogin() } />
        </>
      )
    }
    
  }
}

export default App;
