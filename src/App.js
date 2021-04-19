import React, { Component } from "react";
import ScrollToTop from "./components/ScrollToTop"; // to scroll to top
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import "./base.css";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Pages
import home from "./pages/home";
import login from "./pages/login";
import quiz from "./pages/quiz";
import info from "./pages/info";
import impact_enviorment from "./pages/impact_enviorment";
import impact_human_animal from "./pages/impact_human_animal";
import impact_classification from "./pages/impact_classification";
import impact from "./pages/impact";
import map from "./pages/map";
import notFound from "./pages/notFound";
import treePage from "./pages/treePage";
import volunteer from "./pages/volunteer/volunteer";
import tangaroaBlue from "./pages/volunteer/tangaroaBlue";
import yarrariver from "./pages/volunteer/yarra_river_keeper";
import keep_au_beautiful from "./pages/volunteer/keep_au_beautiful";
import cleanupAu from "./pages/volunteer/cleanupAu";
import beachpartol from "./pages/volunteer/beachpartol";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Router>
            <ScrollToTop>
              <Navbar />
              <div className="container">
                <Switch>
                  <Route exact path="/" component={home} />
                  <Route exact path="/login" component={login} />
                  <Route exact path="/quiz" component={quiz} />
                  <Route exact path="/info" component={info} />
                  <Route exact path="/impact" component={impact} />
                  <Route exact path="/map" component={map} />
                  <Route exact path="/treePage" component={treePage} />
                  <Route exact path="/impact_enviorment" component={impact_enviorment} />
                  <Route exact path="/impact_human_animal" component={impact_human_animal} />
                  <Route exact path="/impact_classification" component={impact_classification}/>
                  <Route exact path="/volunteer" component={volunteer} />
                  <Route exact path="/volunteer/tangaroaBlue" component={tangaroaBlue} />
                  <Route exact path="/volunteer/yarrariver" component={yarrariver} />
                  <Route exact path="/volunteer/keep_au_beautiful" component={keep_au_beautiful} />
                  <Route exact path="/volunteer/cleanupAu" component={cleanupAu} />
                  <Route exact path="/volunteer/beachpartol" component={beachpartol} />
                  <Route exact component={notFound} />
                </Switch>
              </div>
              <Footer />
            </ScrollToTop>
          </Router>
        </div>
    );
  }
}

export default App;
