import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Cart from './components/Cart'
import Total from './components/Total'

class App extends Component {
  addItem(item) {
    console.log('add item')
  }
  render() {
    return (
      <div className="container center">
        <h1>Shopping Cart!</h1>
        <AddItem />
        <Cart />
        <h4>Total:  <Total /></h4>
      </div>
    );
  }
}

export default App;
