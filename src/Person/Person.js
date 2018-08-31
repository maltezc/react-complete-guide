// folder is first letter capitalized
//file is first letter capitalized
import React from 'react';


const person = () => { // research arrow functions
    return <p> i'm a person and i am {Math.floor(Math.random() * 30)} years old!</p>
    {/*to use js stuff inline, wrap in curly braces, can only do simple expressions for now*/}
}

export default person;