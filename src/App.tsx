import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/header/header';
import Footer from './components/organisms/footer/footer';
import Home from './components/templates/template-home/template-home';
import Product from './components/templates/template-product/template-product';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/productos" component={Product} />
        </Switch>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

export default App;
