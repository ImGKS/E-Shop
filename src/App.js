import React from "react";
// import UseEffectAPI from './useEffect/useEffectAPI';
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Products from "./component/Products";
import Product from "./component/Product";
import { Switch, Route } from 'react-router-dom';
import {BrowserRouter}  from "react-router-dom";
import {Provider} from 'react-redux';
import store from './redux/store';




function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        </Switch>
      </BrowserRouter>

    </>
  );
}

export default App;
