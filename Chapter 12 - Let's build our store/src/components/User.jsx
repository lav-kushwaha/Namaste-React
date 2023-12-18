import { useEffect, useState } from "react";
const User = () => {
    const[count1] = useState(0)
    const[count2] = useState(0)

    //SetInterval With UseEffect.
    useEffect(()=>{
       const timer = setInterval(()=>{
            console.log("Hello")
        },1000)
        
        //This function is basically called when we are unmounting this component.
        //When when we leave this component - we go from this component to another.
        //This is unmounting phase.
        return()=>{
           clearInterval(timer) 
           console.log("Render return")
        }
    },[])

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