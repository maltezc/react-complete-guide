// folder is first letter capitalized
//file is first letter capitalized
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css'; // MUST ALWAYS IMPORT CSS
import withClass from '../../../hoc/WithClass'
import Aux from '../../../hoc/Aux'
import { AuthContext } from "../../../containers/App";

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', props)
        this.inputElement = React.createRef();
    }


    componentWillMount() {
        console.log('[Person.js] Inside component willmount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if ( this.props.position === 0 ) {
            this.inputElement.current.focus();
        };
    }

    focus() {
        this.inputElement.current.focus();
    }

    // componentWillReceiveProps(nextProps) {
    //      console.log('[UPDATE Persons.js] Inside ComponentWillReceiveProps', nextProps)
    // }



    render () {
        console.log('[Person.js] Inside render()');
        return (
            <Aux classes={classes.Person}>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm Authenticated!</p> : null} {/*this is part of the global context api setting*/}
                </AuthContext.Consumer>
                <p onClick={this.props.click}> I am {this.props.name} and i am {this.props.age} years old!</p>
                {/*to use js stuff inline, wrap in curly braces, can only do simple expressions for now*/}
                <p>{this.props.children}</p> {/* children refers to any elements between the opening and closing tags of component*/}
                <input
                    ref={this.inputElement}// references are only available in STATEFUL (class or extends) components
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = { // PropTypes will set what type of prop something can be
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,

}

export default withClass(Person, classes.Person);


// When using class-based components, its this.props

// class Person extends Component {
//     render () {
//         return <p>My name is {this.props}</p>
//     }
// }