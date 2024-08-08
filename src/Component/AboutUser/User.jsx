
import { useState } from 'react'
import './User.css'
const User = (props) => {
    const [count, setCount] = useState(0)
    // const [count2] = useState(2)
    const Increase = () => {
        setCount(count + 1);
    }

    return (
        <div className="user-crads">
            {/* <h1>Count = {count}</h1>
            <button onClick={() => { Increase(setCount) }}>+</button> */}
            {/* <h1>Count2 ={count2}</h1> */}
            <h2>Name:{props.name}</h2>
            <h3>Location:Raipur</h3>
            <h4>Contact: @Mayank022</h4>
        </div>
    )
}
export default User