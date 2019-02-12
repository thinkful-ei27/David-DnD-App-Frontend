import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import  {clearAuthToken} from '../local-storage'
import {clearAuth} from '../actions/auth'
import {showModal} from '../actions/dashboard'
import '../styles/dashboard-header.css'

class DashboardHeader extends Component {
  logOut() {
    this.props.history.push("/")
    clearAuthToken()
    this.props.dispatch(clearAuth())
  }
  howToUse() {
    this.props.dispatch(showModal())
  }
  render() {
    if (this.props.showModal) {
      return (
      <div className="modal" >
        <ul className="list-box">
          <li>First you create a character with the form, only a name is required. </li>
          <li>After a character is created it will be set to level one. It will also be given random core stats. </li>
          <li>You can edit the core stats, and level of any character using the edit character button in the middle box.</li>
          <li>You may also delete a character by pressing the delete button in the middle box.</li>
          <li>You may also select different characters using the manager at the bottom.</li>
          <li>It will only show a maximum of 3 characters, but you may use the buttons on the side to see other characters.</li>
          <button className="got-it" onClick={ () => this.howToUse()}>I've Got it!</button>
        </ul>
      </div>
      )
    }
    return (
   <Router >
     <div className="dashboard-header">
       <button onClick={ () => this.logOut()}>Logout</button>
       <button onClick={ () => this.howToUse()}>How Do I use this?</button>
     </div>
   </Router>
   
   
    );
  }
}
const mapStateToProps = state => ({
  showModal: state.dashboard.showModal,
});

export default connect(mapStateToProps)(DashboardHeader);