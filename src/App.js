import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import XmasHome from "./views/pages/xmas-home";
import Home from "./views/pages/home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Add nav which will be in every page */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/xmashome" component={XmasHome} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
