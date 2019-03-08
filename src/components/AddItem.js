import React, { Component } from 'react';
import { connect } from 'react-redux'

const uuidv4 = require('uuid/v4');

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = { item: '', price: 0, id: '' }
    }
    addItem = (e) => {
        e.preventDefault()
        console.log('add item')
        this.props.dispatch({ type: "ADD_ITEM", item: { name: this.state.item, price: parseInt(this.state.price), id: uuidv4() } })
    }

    handleItemChange = (e) => {
        this.setState({ item: e.target.value })
    }
    handlePriceChange = (e) => {
        this.setState({ price: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.addItem}>
                <label>Item: </label><input placeholder='Item Name' onChange={this.handleItemChange} />
                <label>Price: </label><input placeholder='Item Price' onChange={this.handlePriceChange} />
                <button>ADD ITEM</button>
            </form>
        );
    }
}

export default connect(mapStateToProps)(AddItem)
