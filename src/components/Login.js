import React, { Component } from 'react';
import { Link } from 'react-router';
import base from '../config/base';

class Login extends Component {

  constructor (props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  login (event) {
    event.preventDefault();
  // starting from the same search as in CreateUser,
  // https://github.com/tylermcginnis/re-base/blob/a96bd8c9909a6e48d83f18bdb5b93c3e1efe1529/tests/specs/re-base.spec.js
  // shows a base.authWithPassword which takes email and password
  // arguments
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    base.authWithPassword({
      email, password
    }, this.handleLogin);
  }

  handleLogin (error, authData) {
    console.log('error: ', error)
    console.log('authData: ', authData);
    // looking at the authData object in the console I saw keys like displayname and emailverified; Googling for those
    // and firebase led me to https://firebase.google.com/docs/reference/node/firebase.User
    // which had a method called getToken, which returns a promise

    // the method involves a user object that I keep in state
    // in AppContainer, so I'm delegating to a method I defined there
    this.props.setCurrentUser(authData);
  }
  githubIt () {
    var provider = new base.auth.GithubAuthProvider();
    base.auth().signInWithPopup(provider).then((result) => {
      var user = result.user;
      this.props.setCurrentUser(user);
    });
  }
  render () {
    return (
      <form onSubmit={this.login}>
        <legend>Please login</legend>
        <input type="text" ref="email" placeholder="Email Address"/>
        <input type="password" ref="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p>Are you new?
          {/*<Link to="/signup">Sign up here!</Link>*/}
          <a onClick={this.githubIt.bind(this)}>Sign up through GitHub</a>
        </p>
      </form>
    )
  }
}
export default Login;
