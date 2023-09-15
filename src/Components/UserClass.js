import React from "react";
import "../../src/App.css"


// class UserClass extends React.Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0,
//             count1: 1
//         }
//     }
//     render() {

//         const { count, count1 } = this.state;
//         return (
//             <div className="aboutCard">
//                 <h2>Name : {this.props.name}</h2>
//                 <h3>{count}</h3>
//                 <h3>{count1}</h3>
//                 <button onClick={() => {
//                     this.setState({
//                         count: this.state.count + 1
//                     })
//                 }}>Increment</button>
//             </div>
//         );
//     }
// }


class UserClass extends React.Component {

    constructor(props) {

        super(props)

        this.state = {
            userInfo: {
                name: "name",
                location: "place"
            }
        }
    }

    async componentDidMount() {

        const data = await fetch("https://api.github.com/users/prakashbhattcse")
        const json = await data.json();

        this.setState({
            userInfo: json
        })

        console.log(json)
    }

    componentWillUnmount() {
        console.log("unmounted")
    }

    render() {
        const { name, avatar_url, login } = this.state.userInfo;
        return (
            <>
                <div>
                    <h3>{name}</h3>
                    <img src={avatar_url} alt="" />
                    <h3>{login}</h3>
                </div>
            </>
        )
    }

}

export default UserClass;

