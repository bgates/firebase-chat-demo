import React, { Component } from 'react';
import base from '../config/base';

class Signup extends Component {

  constructor (props) {
    super(props);
    this.state = {
      names: [],
      loading: true
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentDidMount () {
    this.rebaseRef = base.syncState('names', {
      context: this,
      state: 'names',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    })
  }
  componentWillUnmount () {
    base.removeBinding(this.rebaseRef)
  }
  handleSubmit (event) {
    event.preventDefault();
    let input = event.target.elements[0];
    let username = input.value;
    let names = this.state.names;
    this.setState({
      names: names.concat([username])
    });
    input.value = '';
  }
  render () {
    return (
      <div>
        <ul>
        {this.state.names.map((name, index) => <li key={index}>{name}</li>)}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="sign here"/>
        </form>
      </div>
    )
  }
}
export default Signup;
