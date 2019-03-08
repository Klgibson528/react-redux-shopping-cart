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
            <div>
                {this.props.total}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Total);