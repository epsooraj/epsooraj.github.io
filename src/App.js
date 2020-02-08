import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './views/xmas-home';

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* Add nav which will be in every page */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/xmashome' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
