import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}


class Cart extends Component {
    handleDelete = (item) => {
        this.props.dispatch({type:'DELETE_ITEM', item:item}) 
    }
    render() {
        const items = this.props.cart.map(item => {
            return <div key={item.name}><li>{item.name} - {item.price}</li><button onClick={this.handleDelete(item)}>Remove</button></div>
        })
        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Cart);