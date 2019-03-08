import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        total: state.total
    };
}

class Total extends Component {
    render() {
        return (
            <React.Fragment>$ {this.props.total}</React.Fragment>
        );
    }
}

export default connect(
    mapStateToProps,
)(Total);