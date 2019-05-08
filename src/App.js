import React, { component } from 'react';
import AddProduct from './components/product/AddProduct';
import EditProduct from './components/product/EditProduct';
import Product from './components/product/index';

import { BrowserRouter, Route,  Link } from "react-router-dom";


import './App.css';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Crud using redux </h2>
        <Link to="/">Home</Link> |
        <Link to="/add">Add</Link> 
        
        <br /><br />
        <Route exact path="/" component={Product}></Route>
        <Route path="/add" exact component={AddProduct}></Route>
        <Route path="/edit/:id" exact component={EditProduct}></Route>
        </div>
    </BrowserRouter>

  );
}

export default App;

