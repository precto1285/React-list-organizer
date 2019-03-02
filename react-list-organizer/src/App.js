import React, { Component } from 'react';
import './App.css';
import ListMaker from './Components/1Components/ListMaker';
import Grocery from './Components/2Component/Grocery';
import Todo from './Components/2Component/To-do';

class App extends Component {
  constructor() {
    super();
    this.state = {
      grocery: [
        { fruit: ['apple', 'banana', 'orange', 'melon'] },
        { starch: ['bread', 'rice', 'potato', 'corn'] },
        { meat: ['beef', 'chicken', 'pork', 'fish'] },
        { vegetable: ['spinach', 'brocolli', 'green beans', 'asparagus'] }
      ],
      todo: [
        { office: ['file report', 'team meeting', 'client meeting', 'planning'] },
        { home: ['clean the carpet', 'take out the trash', 'wash the dishes'] },
        { dog: ['morning walk', 'grooming', 'play time', 'afternoon walk', 'medicine'] },
        { friends: ['dinner', 'bowling', 'yoga class', 'golf'] },
        { family: ['Nephews Birthday', 'Aunties Funeral', 'Daughters Wedding'] }
      ]
    }



  }
  render() {
    return (
      <div className="App">
        <ListMaker />
        <Grocery
          fruit="apple"
          starch="bread"
          meat="pork"
          vegetable="spinach" />
        <Todo
          office="file reports"
          home="clean carpet"
          dog="take dog to vet"
          friends="dinner with friends"
          family="Nephew's Birthday"
        />
      </div>
    );
  }
}

export default App;
