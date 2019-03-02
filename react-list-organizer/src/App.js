import React, { Component } from 'react';
import './App.css';
import ListMaker from './Components/1Components/ListMaker';
import Grocery from './Components/2Component/Grocery';
import Todo from './Components/2Component/To-do';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListMaker />
        <Grocery />
        <Todo />
      </div>
    );
  }
}

export default App;
