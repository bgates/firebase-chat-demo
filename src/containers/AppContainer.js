import React, { Component } from 'react';
import App from '../components/App';

class AppContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUser: ''
    }
    this.setCurrentUser = this.setCurrentUser.bind(this);
  }

  setCurrentUser (user) {
    this.setState({ currentUser: user })
  }
   
  render() {
    return (
      <App
        setCurrentUser={this.setCurrentUser}
        currentUser={this.state.currentUser}
        children={this.props.children}/>
    );
  }
}

export default AppContainer;
