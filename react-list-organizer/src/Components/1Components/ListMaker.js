import React, { Component } from 'react';

class ListMaker extends Component {
  buttonHandler() {
    console.log('Hello World');
  }
  render() {
    return (
      <div>
        <h1>List Maker:</h1>
        <input type="text" placeholder="enter list" id="listMesssage" />

        <button onClick={this.buttonHandler}>Send</button>
      </div>
    )
  }
}

export default ListMaker;