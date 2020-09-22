import React, {Component} from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import 'antd/dist/antd.css';
import './style/style.css';

import BackgroundApp from "./components/BackgroundApp";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import RememberPass from "./components/RememberPass";
import Registration from "./components/Registration";
import Agreement from "./components/Agreement";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <div className={'app_cont'}>

          <BackgroundApp />
          <Navbar />

          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/rememberPass'} component={RememberPass}/>
            <Route path={'/registration'} component={Registration}/>
            <Route path={'/agreement'} component={Agreement}/>
          </Switch>

        </div>
      </Router>
    );
  }
}

export default connect()(App);
