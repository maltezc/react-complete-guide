import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //first letter is capitalized so it identifies as a custom component

class App extends Component {
  render() {
    return (
      <div className="App"> {/* next everything in one root element*/}
        <h1>Hi, i'm a react app</h1>
      <Person /> {/*This, along with the Person import brings in the Person component */}
      <Person />
      <Person />
      </div>

    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default App;
// jsx = javascript + html + css