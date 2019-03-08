import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        total: state.total
    };
}

const Total = ({total}) => {
        return (
            <React.Fragment>$ {total}</React.Fragment>
        );
}

export default connect(
    mapStateToProps,
)(Total);