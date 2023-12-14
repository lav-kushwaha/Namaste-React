import { useContext, useState } from 'react'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlinestatus';
import UserContext from '../utils/UserContext';

const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    
    //Custom Hooks.
    const status = useOnlinestatus();

    //useContext hooks to access the context value.
    const {LoggedInUser} = useContext(UserContext)
    // console.log(LoggedInUser) //Default = this default data are comming from UserContext.js
 
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className='online-status'>
              <ul>
                <li style={{listStyle:"none",marginLeft:"100px"}}>Online Status: {status?"🟢":"🔴"}</li>
              </ul>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className='login-btn' 
                    onClick={()=>{
                        (btnName==="Login")
                        ?setbtnName("Logout")
                        :setbtnName("Login")}}>{btnName}
                    </button>
                    <li>{LoggedInUser}</li>
                </ul>
            </div>
        </div>
    );
}

export default Header;