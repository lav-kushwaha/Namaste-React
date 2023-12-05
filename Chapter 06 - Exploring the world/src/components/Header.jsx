import { useState } from 'react'
import logo from '../../images/logo.png'

const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    // let btnName = "Login"

    const ChangeBtnName =()=>{
        // btnName = "Logout"
        // console.log(btnName)
       if(btnName=="Login"){
         setbtnName("Logout")
       }
       else{
         setbtnName("Login")
       }
    }

    //Entire Header Component is re-render with every state variable change.
    //but only button will change thats why react is good for DOM manipulation.
    console.log("Header Update")

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={logo}/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={ChangeBtnName}>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;