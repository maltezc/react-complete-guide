import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //first letter is capitalized so it identifies as a custom component



class App extends Component {
    state = { // use state carefully
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }




    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 29 },
                { name: 'Stephanie', age: 27 }
            ]

        })
    }

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons]; // always update state with an immutable fashion like so.
        persons.splice(personIndex, 1); // will remove 1 element from the array
        this.setState({persons: persons});
    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }


  render() {
        const style = {  // must be written in jsx if it is inline like this
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer' // changes to hand pointer on roll over
        };

    let persons = null; // using persons as a variable to turn on and off

    if (this.state.showPersons) {
        persons = (
          <div>
              {this.state.persons.map((person, index) => {
                  return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}  />
              })}
          </div>

        )
    }

    return (
      <div className="App"> {/* next everything in one root element*/}
        <h1>Hi, i'm a react app</h1>
          <p>This is working!</p>
          <button
              style={style} // stles a specific component. in this case, a button.
              onClick = {this.togglePersonHandler}>Toggle Persons</button> {/*dont add () after this.switchNameHandler. it will execute when the DOM is loaded*/}
      {persons}
    </div>

    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default App;
// jsx = javascript + html + css