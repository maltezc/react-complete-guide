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
    const WithClass = class extends Component {
        render() {
            return (
                <div className={className}>
                    <WrappedComponent ref={this.props.forwardedRef} {...this.props}/> {/* use spread operator before props to pass unknown/already existing props*/}
                </div>
            )
        }
    }
    return React.forwardRef((props, ref) => {
        return <WithClass {...props} forwardedRef={ref}/>
    });

}

export default withClass;