import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import  {clearAuthToken} from '../local-storage'
import {clearAuth} from '../actions/auth'
import '../styles/dashboard-header.css'

class DashboardHeader extends Component {
  onClick() {
    this.props.history.push("/")
    clearAuthToken()
    this.props.dispatch(clearAuth())
  }
  render() {
    return (
   <Router >
     <div>
       <button onClick={ () => this.onClick()}>Logout</button>
     </div>
   </Router>
   
   
    );
  }
}

export default connect()(DashboardHeader);