import React, { Component } from 'react';
import Dashboard from './dashboard'
import LoginForm from './login-form'
import LandingPage from './landing-page'
import {refreshAuthToken} from '../actions/auth';
import {Route, withRouter} from 'react-router-dom';
import RegistrationPage from './registration-page';
import {connect} from 'react-redux';
class App extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
      // When we are logged in, refresh the auth token periodically
      this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
      // Stop refreshing when we log out
      this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    // One hour
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()),60 * 60 * 1000);
  }

  stopPeriodicRefresh() {
    if (!this.refreshInterval) {
      return;
    }
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
   <div>
     <Route exact path="/login" component={LoginForm}/>
     <Route exact path="/" component={LandingPage} />
     <Route exact path="/dashboard" component={Dashboard} />
     <Route exact path="/register" component={RegistrationPage} />
   </div>
    );
  }
  //Redirect's the webpage to a specific component based on the address in the browser
}

const mapStateToProps = state => ({
  hasAuthToken: (state.auth.authToken !== null),
  loggedIn: (state.auth.currentUser !== null)
});

export default withRouter(connect(mapStateToProps)(App));
