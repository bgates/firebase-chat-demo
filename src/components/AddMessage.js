import React, { Component } from 'react';
import base from '../config/base';

class AddMessage extends Component {
  handleSubmit(event){
    if(event.keyCode === 13){
      let user = base.auth().currentUser;
      this.props.add({ user: user.email, text: this.refs.msg.value});
      this.refs.msg.value = '';
    }
  }
  render(){
    return (
      <div className="col-sm-12 text-center">
        <input
          type="text"
          ref="msg"
          className="form-control"
          placeholder="New Item"
          onKeyDown={this.handleSubmit.bind(this)} />
      </div>

    )
  }
}
export default AddMessage;
