import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}


class Cart extends Component {
    handleDelete = (item) => {
        // e.preventDefault()
        // console.log(e.target.id)
        this.props.dispatch({ type: 'DELETE_ITEM', item: item })
    }
    render() {
        const items = this.props.cart.map(item => {
            return <div className="row container" key={item.id}><h5 className="col s10">{item.name}:  ${item.price}</h5><button className="col s2" id={item.id} onClick={() => { this.handleDelete(item) }}>Remove</button></div>
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