import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'; //first letter is capitalized so it identifies as a custom component
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';


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
    let persons = null; // using persons as a variable to turn on and off

    if (this.state.showPersons) {
        persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;

    }




    return (
        <div className={classes.App}> {/* next everything in one root element*/}
            <Cockpit
                appTitle={this.props.title}// cannot use props inside render method
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                clicked={this.togglePersonHandler}/>
            {persons}
        </div>

    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default App;
// Radium wrapping your app to add some 3rd party capabilities
// jsx = javascript + html + css