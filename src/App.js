import React from 'react';
import './App.css';

import './assets/plugins/bootstrap/bootstrap.min.css';
import './assets/plugins/owl-carousel/owl.theme.default.min.css';
import './assets/plugins/magnific-popup/magnific-popup.min.css';
import './assets/plugins/font-awesome/css/all.css';
import './assets/plugins/themify/themify-icons.min.css';
// import './assets/css/app.min.css';
// import './assets/plugins/owl-carousel/owl.carousel.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './views/home/xmas-home';

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
