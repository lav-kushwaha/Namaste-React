import { useState } from "react";
const User = () => {
    const[count1] = useState(0)
    const[count2] = useState(0)

    return(
        <div className="userCard">
            <h2>I am Function Component</h2>
            <h3>Location</h3>
            <h4>Contact</h4>
            <h1>{count1}</h1>
            <h2>{count2}</h2>
            <button>Click</button>
        </div>
    )
}
export default User;