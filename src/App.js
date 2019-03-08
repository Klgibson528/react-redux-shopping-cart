import React, { Component } from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Cart from './components/Cart'

class App extends Component {
  addItem(item) {
    console.log('add item')
  }
  render() {
    return (
      <div className="App">
        <h1>Shopping Cart!</h1>
        <AddItem />
        <Cart />

      </div>
    );
  }
}

export default App;
