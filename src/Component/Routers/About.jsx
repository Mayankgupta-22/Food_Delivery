import React from 'react'
import User from '../AboutUser/User'
import UserClass from '../AboutUser/UserClass'
import { Component } from 'react'

class About extends Component {

    constructor() {
        super();
        // console.log("Constructor ");
    }

    render() {
        // console.log("Parents Render");
        return (
            // destructure


            <div>
                <h1>About</h1>
                <h2>This is Namaste React web series</h2>
                {/* <User name={"Mayank gupta (Functin)"} /> */}

                <UserClass name={"Mayank Gupta (Class)"} />
            </div>
        )
    }
}

export default About
