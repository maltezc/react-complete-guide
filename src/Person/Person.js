// folder is first letter capitalized
//file is first letter capitalized
import React from 'react';


const person = (props) => { // research arrow functions. using props means you bring in the properties of the component
    return (

        <div>
            <p> i'm a {props.name} and i am {props.age} years old!</p>
    {/*to use js stuff inline, wrap in curly braces, can only do simple expressions for now*/}
            <p>{props.children}</p> {/* children refers to any elements between the opening and closing tags of component*/}
        </div>
)

}

export default person;


// When using class-based components, its this.props

// class Person extends Component {
//     render () {
//         return <p>My name is {this.props}</p>
//     }
// }