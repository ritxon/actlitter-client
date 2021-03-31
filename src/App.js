import React, { Component } from "react";
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
<<<<<<< HEAD
import data from "./pages/data";
import impact_enviorment from "./pages/impact_enviorment";
import impact_human_animal from "./pages/impact_human_animal";
import impact_classification from "./pages/impact_classification";
=======
import impact from "./pages/impact";
>>>>>>> ca22880c5b549f96a5d4a7e8bb6883c4be77519b

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6fbf73",
      main: "#2e7d32",
      dark: "#1b5e20",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <Route exact path="/login" component={login} />
                <Route exact path="/quiz" component={quiz} />
                <Route exact path="/info" component={info} />
<<<<<<< HEAD
                <Route exact path="/data" component={data} />
                <Route exact path="/impact_enviorment" component={impact_enviorment} />
                <Route exact path="/impact_human_animal" component={impact_human_animal} />
                <Route exact path="/impact_classification" component={impact_classification} />
=======
                <Route exact path="/impact" component={impact} />
>>>>>>> ca22880c5b549f96a5d4a7e8bb6883c4be77519b
              </Switch>
            </div>
            <Footer />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
