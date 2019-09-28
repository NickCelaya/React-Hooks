import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes/routes";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <MuiThemeProvider>
            <Routes />
          </MuiThemeProvider>
        </header>
      </div>
    </Router>
  );
};
export default App;
