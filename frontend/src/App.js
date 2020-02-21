import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'antd/dist/antd.css';
import './style/style.css';

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";

class App extends Component {

    render() {
        return (
            <Router>
                <div>

                    <Navbar />

                    <Switch>
                        <Route exact path={'/'} component={Home}/>
                        <Route path={'/login'} component={Login}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default connect()(App);
