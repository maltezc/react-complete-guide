// folder is first letter capitalized
//file is first letter capitalized
import React, { Component } from 'react';

import classes from './Person.css'; // MUST ALWAYS IMPORT CSS

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
    }


    componentWillMount() {
        console.log('[Person.js] Inside component willmount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
    }

    render () {
        console.log('[Person.js] Inside render()');
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}> i'm a {this.props.name} and i am {this.props.age} years old!</p>
                {/*to use js stuff inline, wrap in curly braces, can only do simple expressions for now*/}
                <p>{this.props.children}</p> {/* children refers to any elements between the opening and closing tags of component*/}
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
}


export default Person;


// When using class-based components, its this.props

// class Person extends Component {
//     render () {
//         return <p>My name is {this.props}</p>
//     }
// }