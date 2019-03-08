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
        const form = document.getElementById('form')
        form.reset()
        this.props.dispatch({ type: "ADD_ITEM", item: { name: this.state.item, price: parseFloat(this.state.price), id: uuidv4() } })
    }

    handleItemChange = (e) => {
        this.setState({ item: e.target.value })
    }
    handlePriceChange = (e) => {
        this.setState({ price: e.target.value })
    }

    render() {
        return (
            <form id="form" className="container" onSubmit={this.addItem}>
                <input placeholder='Item Name' onChange={this.handleItemChange} />
                <input placeholder='Item Price' onChange={this.handlePriceChange} />
                <button>ADD ITEM</button>
            </form>
        );
    }
}

export default connect(mapStateToProps)(AddItem)
