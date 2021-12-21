import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/home/home';
import Inmueble from './containers/product-detail/product-detail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/inmueble/:id" component={Inmueble} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
