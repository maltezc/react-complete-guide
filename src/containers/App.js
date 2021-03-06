import React, { PureComponent } from 'react';

import classes from './App.css';
import Persons from '../components/Persons/Persons'; //first letter is capitalized so it identifies as a custom component
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
// use functional components wherever possible

import Aux from '../hoc/Aux'
import withClass from '../hoc/WithClass'

export const AuthContext = React.createContext(false); //keyword "export" allows element to be used outside of this file

class App extends PureComponent {
    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor', props)
        this.state = { // use state carefully
        persons: [ // id must be in for props so React can track what elements what has been added, deleted, or updated
            { id: 'asdf', name: 'Max', age: 28 },
            { id: 'adsfe', name: 'Manu', age: 29 },
            { id: 'asdf1', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false,
        toggleClicked: 0,
        authenticated: false,
    }
    }


    componentWillMount() { // Try not to use this one
        console.log('[App.js] Inside component willmount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[UPDATE  App.js] Inside shouldComponentUpdate', nextProps, nextState)
    //     return nextState.persons !== this.state.persons ||
    //         nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) { // try to avoid using this one
        console.log('[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState)
    }

    // avoid using componentWillReceiveProps <-- often used incorrectly


    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('[UPDATE App.js] Inside getDerivedStateFromProps',
            nextProps,
            prevState
        );
        return prevState;
    }

    getSnapShotBeforeUpdate() {
        console.log('[UPDATE App.js] Inside getSnapShotBeforeUpdate',
        );
    }

    componentDidUpdate() {
        console.log('[UPDATE App.js] Inside componentDidlUpdate')
    }

    // state = { // use state carefully
    //     persons: [ // id must be in for props so React can track what elements what has been added, deleted, or updated
    //         { id: 'asdf', name: 'Max', age: 28 },
    //         { id: 'adsfe', name: 'Manu', age: 29 },
    //         { id: 'asdf1', name: 'Stephanie', age: 26 }
    //     ],
    //     otherState: 'some other value',
    //     showPersons: false
    // }





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
        this.setState( (prevState, props) => {  // Best practice for mutating state is to rely on the previous state
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
    }

    loginHandler = () => {
        this.setState({authenticated: true});
    }

  render() {

    console.log('[App.js] inside render()')

    let persons = null; // using persons as a variable to turn on and off

    if (this.state.showPersons) {
        persons = <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            />
    }


    return (
        <Aux>
            <button onClick={() => this.setState({showPersons: true})}>Show Persons </button>
            <Cockpit
                appTitle={this.props.title}// cannot use props inside render method
                showPersons={this.state.showPersons}
                persons={this.state.persons}
                login={this.loginHandler} // pulled from Cockpit.js
                clicked={this.togglePersonHandler}
            />
            <AuthContext.Provider value={this.state.authenticated}>
                {persons}
            </AuthContext.Provider>
        </Aux>
    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default withClass(App, classes.App);
// Radium wrapping your app to add some 3rd party capabilities
// jsx = javascript + html + css