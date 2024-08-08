import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        // console.log("child Constructor");

        this.state = {
            userinfo: {
                name: "Dummy",
                location: "defult",
            },

        }
    }
    async componentDidMount() {
        // console.log("Child compoenet DId mount");

        const data = await fetch("https://api.github.com/users/Mayankgupta-22")
        const json = await data.json();

        this.setState({
            userinfo: json,
        })
        console.log("json data", json);
    }


    render() {
        // console.log("child render");
        // destructure 
        const { name } = this.props
        return (
            <div className="user-crads">
                {/* <h1>count:{this.state.count}</h1>
                <h1>count2:{this.state.count2}</h1>
                <button onClick={() => {
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState(({
                        count: this.state.count + 1,
                        count2: this.state.count2 + 1,
                    }))

                }}>Count increase</button> */}
                <h2>Name:{this.state.userinfo.name}</h2>
                <h3>Location:{this.state.userinfo.location}</h3>
                <h4>Contact: @Mayank022</h4>
            </div>
        );
    }

}
export default UserClass;