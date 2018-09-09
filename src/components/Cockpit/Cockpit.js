import React from 'react';

import classes from'./Cockpit.css';

const cockpit = ( props ) => { // "props" needs to be in the () if editing props.
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2) {
        assignedClasses.push( classes.red ) // classes = ['red']
    }
    if (props.persons.length <=1) {
        assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, i'm a react app</h1>
              <p className={assignedClasses.join(' ')}>This is working!</p>
              <button
                  className={btnClass}
                  onClick={props.clicked}>Toggle Persons</button> {/*dont add () after this.switchNameHandler. it will execute when the DOM is loaded*/}
        </div>
    );
};

export default cockpit;