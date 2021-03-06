import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import LoginForm from './login-form';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="home">
      <h1>Dungeons and Dragons Character Creator</h1>
      <div className="description-box">
        <h2>
          Create Dungeon and Dragons characters on the fly
          whether you're on a tablet, computer, or mobile device,
          this website saves your characters to your login allowing you to access,
          update, or create new characters from anywhere!
        </h2>
      <h3>If you don't want to create a new user, checkout the app with a test user! <br></br>
      <strong>Username: </strong>Test <br></br>
      <strong>Password: </strong>TestTester</h3>
      </div>
      <div className="login-box">
        <Link to="/login" id="login-link">Login</Link> <br/>
        <Link to="/register" id="register-link">Register</Link>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);
