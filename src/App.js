import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'; //first letter is capitalized so it identifies as a custom component



class App extends Component {
    state = { // use state carefully
        persons: [
            { name: 'Max', age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 26 }
        ]
    }


    switchNameHandler = (newName) => { // handles switch name button function
        // console.log('was clicked')
        // this.state.persons[0].name = 'Maximilian' //calls state from above. doesnt work
    this.setState({ // setState changes the state.
        persons: [
            { name: newName, age: 28 },
            { name: 'Manu', age: 29 },
            { name: 'Stephanie', age: 27 }
        ]
    })

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



  render() {
    return (
      <div className="App"> {/* next everything in one root element*/}
        <h1>Hi, i'm a react app</h1>
          <p>This is working!</p>
          <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button> {/*dont add () after this.switchNameHandler. it will execute when the DOM is loaded*/}
      <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/> {/*This, along with the Person import brings in the Person component */}
      <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,'Max!')}
          changed={this.nameChangedHandler} > My hobbies: Racing</Person> {/*use bind over function call above where ever possible*/}
      <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
      </div>

    );
  // return React.createElement('div',null, 'h1', 'i\'m a react app');

  }
}

export default App;
// jsx = javascript + html + css