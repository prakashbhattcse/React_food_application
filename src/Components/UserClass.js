import React from "react";
import "../../src/App.css"


class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count1: 1
        }
    }
    render() {

        const {count,count1}= this.state;
        return (
            <div className="aboutCard">
                <h2>Name : {this.props.name}</h2>
                <h3>{count}</h3>
                <h3>{count1}</h3>
                <button onClick={()=>{
                this.setState({
                    count : this.state.count +1
                })
            }}>Increment</button>
            </div>
        );
    }
}

export default UserClass;

