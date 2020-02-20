import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import 'antd/dist/antd.css';
import './style/style.css'

import Navbar from "./components/Navbar";

class App extends Component {

    render() {
        return (
            <Router>
                <div>

                    <Navbar />

                </div>
            </Router>
        );
    }
}

export default connect()(App);
