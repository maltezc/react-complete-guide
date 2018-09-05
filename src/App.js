import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
import Person from './Person/Person'; //first letter is capitalized so it identifies as a custom component



class App extends Component {
    state = { // use state carefully
        persons: [ // id must be in for props so React can track what elements what has been added, deleted, or updated
            { id: 'asdf', name: 'Max', age: 28 },
            { id: 'adsfe', name: 'Manu', age: 29 },
            { id: 'asdf1', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }




    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        // const person = Object.assign({}, this.state.persons[personIndex]);
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;



        this.setState ( { persons: persons });

        };


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
            backgroundColor: 'green',
            color:'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer', // changes to hand pointer on roll over
            ':hover': { // because they start with a colon, they are not valid strings, thus must wrap with quotes
                backgroundColor: 'lightgreen',
                color: 'black',
            }
        };

    let persons = null; // using persons as a variable to turn on and off

    if (this.state.showPersons) {
        persons = (
          <div>
              {this.state.persons.map((person, index) => {
                  return <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}
                  key={person.id}  // Is necessary to track prop from "class App extends Component"
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              })}

          </div>
        );

        style.backgroundColor = 'red'; // accessing js/css style variable through js
        style[':hover'] = { // must wrap on quotes
                backgroundColor: 'salmon',
                color: 'black',
            }
    }

    let classes = [];
    if (this.state.persons.length <= 2) {
        classes.push('red') // classes = ['red']
    }
    if (this.state.persons.length <=1) {
        classes.push('bold'); // classes = ['red', 'bold']
    }


    return (
      <div className="App"> {/* next everything in one root element*/}
        <h1>Hi, i'm a react app</h1>
          <p className={classes.join(' ')}>This is working!</p>
          <button
              style={style} // styles a specific component. in this case, a button.
              onClick = {this.togglePersonHandler}>Toggle Persons</button> {/*dont add () after this.switchNameHandler. it will execute when the DOM is loaded*/}
      {persons}
    </div>

    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default Radium(App);
// Radium wrapping your app to add some 3rd party capabilities
// jsx = javascript + html + css