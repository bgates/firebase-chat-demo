import React, { Component } from 'react';
import Chat from '../components/Chat';
import base from '../config/base';

class ChatContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      messages: [],
      loading: true
    }
    this.handleAddMessage = this.handleAddMessage.bind(this);
    this.handleRemoveMessage = this.handleRemoveMessage.bind(this);
  }
  componentDidMount () {
    this.rebaseRef = base.syncState('messages', {
      context: this,
      state: 'messages',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    })
  }
  componentWillUnmount () {
    base.removeBinding(this.rebaseRef)
  }
  handleAddMessage (newMessage) {
    this.setState({
      messages: this.state.messages.concat([newMessage])
    })
  }
  handleRemoveMessage (index) {
    let newList = this.state.messages;
    newList.splice(index, 1);
    this.setState({
      messages: newList
    })
  }
  render () {
    return (
      <Chat
        handleAddMessage={this.handleAddMessage}
        handleRemoveMessage={this.handleRemoveMessage}
        messages={this.state.messages}
        loading={this.state.loading} />
    )
  }
}
export default ChatContainer;
