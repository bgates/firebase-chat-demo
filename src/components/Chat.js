import React from 'react';
import AddMessage from './AddMessage';
import base from '../config/base';

// someFunction({x, y}) is the same as having
// object = {x: someValue, y: anotherValue}
// someFunction(object)
const Chat = ({messages, handleAddMessage, handleRemoveMessage}) => {
  var messageComponents = messages.map(
    (message, index) => <Message key={index} index={index} remove={handleRemoveMessage} message={message} />
  );
  return (
    <div className="col-sm-12">
      <ul className="list-group">
        {messageComponents}
      </ul>
      <AddMessage add={handleAddMessage}/>
    </div>
  )
}
const Message = ({ remove, message, index }) => {
  var styles = {
    listGroup: {
      margin: '5px 0'
    },
    removeItem: {
      fontSize: 20,
      position: "absolute",
      top: 12,
      left: 6,
      cursor: "pointer",
      color: "rgb(222, 79, 79)",
      border: "none",
      background: "none",
      padding: 0
    },
    message: {
      paddingLeft: 20,
      fontSize: 17
    },
    signature: {
      float: "right"
    }
  };
  let showDelete, userName;
  if(message.user === base.auth().currentUser.email){
    showDelete = true;
    userName = 'me'
  } else {
    showDelete = false;
    userName = message.user;
  }
  return (
    <li className="list-group-item" style={styles.listGroup}>
      {showDelete ? <button
        className="glyphicon glyphicon-remove"
        style={styles.removeItem}
        onClick={remove.bind(null, index)} /> : ''}
      <span style={styles.message}>
        {message.text}
      </span>
      <small style={styles.signature}>posted by {userName}</small>
    </li>
  )
}
export default Chat;
