import React, { Component, useState } from 'react';
import './App.css';
import "./index.css";
import Product from "./component/Product/Product.js";
import ProductList from './component/ProductList/ProductList';

const App = () => {
    return (
        <div className='container' id="title">
            <h1>Shopping List</h1>
            <ProductList />
        </div>
    );

}
export default App;