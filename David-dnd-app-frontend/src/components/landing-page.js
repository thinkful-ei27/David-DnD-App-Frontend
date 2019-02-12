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
            <p>This app, can create characters on the fly
                whether you're on a tablet, computer, or mobile device,
                the website saves your characters to your login allowing you to access,
                update, or create new characters from anywhere!
            </p>
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
