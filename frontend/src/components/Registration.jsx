import React, {Component} from 'react';
import {connect} from 'react-redux';

class Registration extends Component {
    render() {
        return (
            <div>
                <h1>Registration</h1>
            </div>
        );
    }
}

export default connect()(Registration);
