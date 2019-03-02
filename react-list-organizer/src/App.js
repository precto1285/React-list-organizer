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
        { dog: ['morning walk', 'grooming', 'play time', 'visit the vet', 'medicine'] },
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
          fruit={this.state.grocery[0].fruit[0]}
          starch={this.state.grocery[1].starch[0]}
          meat={this.state.grocery[2].meat[0]}
          vegetable={this.state.grocery[3].vegetable[0]} />
        <Todo
          office={this.state.todo[0].office[0]}
          home={this.state.todo[1].home[0]}
          dog={this.state.todo[2].dog[0]}
          friends={this.state.todo[3].friends[0]}
          family={this.state.todo[4].family[0]}
        />
      </div>
    );
  }
}

export default App;
