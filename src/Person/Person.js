// folder is first letter capitalized
//file is first letter capitalized
import React from 'react';

import './Person.css'; // MUST ALWAYS IMPORT CSS


    return (
        <div className="Person">
            <p onClick={props.click}> i'm a {props.name} and i am {props.age} years old!</p>
    {/*to use js stuff inline, wrap in curly braces, can only do simple expressions for now*/}
            <p>{props.children}</p> {/* children refers to any elements between the opening and closing tags of component*/}
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
  )
};

export default person;


// When using class-based components, its this.props

// class Person extends Component {
//     render () {
//         return <p>My name is {this.props}</p>
//     }
// }