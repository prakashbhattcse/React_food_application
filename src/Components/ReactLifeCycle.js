

import React, { Component } from 'react';

class LifecycleDemo extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello, React!',
        };
        console.log('Constructor called');
    }

    componentDidMount() {
        console.log('componentDidMount called');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate called');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount called');
    }

    changeMessage = () => {
        this.setState({ message: 'Updated message!' });
    }

    render() {
        console.log('render called');
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.changeMessage}>Change Message</button>
            </div>
        );
    }
}

export default LifecycleDemo;


