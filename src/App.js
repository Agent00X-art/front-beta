import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";
import mainpage from "./components/mainpage";
import Footer from "./components/Footer";

function App(props) {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
             <Route exact path="/" component={mainpage} />
             <Route path="/catalog" component={ProductList} />
             <Route path="/my-cart" component={Cart} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
