import React, { Component } from 'react';


// const withClass = (WrappedComponent, className) => {
//     return (props) => (
//         <div className={className}>
//             <WrappedComponent {...props}/> {/* use spread operator before props to pass unknown/already existing props*/}
//         </div>
//     )
// };

// to reach out to web, use below

const withClass = (WrappedComponent, className) => {
    return class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/> {/* use spread operator before props to pass unknown/already existing props*/}
                </div>
            )
        }
    }
}
export default withClass;