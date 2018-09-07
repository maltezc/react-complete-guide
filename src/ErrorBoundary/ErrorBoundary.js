import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError:true, errorMessage: error});
    }


    render() {
        if (this.state.hasError) {

            return <h1>Something went wrong</h1>
        } else {
            return this.props.children;
        }
    }
}


export default ErrorBoundary;

// be careful where you use this. only use where you cant control failure