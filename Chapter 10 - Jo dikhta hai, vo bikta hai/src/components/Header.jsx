import { useState } from 'react'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import useOnlinestatus from '../utils/useOnlinestatus';

const Header = () =>{
    const [btnName,setbtnName]=useState("Login")
    const status = useOnlinestatus();
    return (
        <div className='flex justify-evenly align-center'>
            <div className='w-28 mt-4'>
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className='online-status'>
              <ul className='p-10 text-lg'>
                <li style={{listStyle:"none",marginLeft:"100px"}}>Online Status: {status?"🟢":"🔴"}</li>
              </ul>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-8 gap-2 text-lg'>
                    <li className='text-lg'><Link to="/">Home</Link></li>
                    <li className='text-lg'><Link to="/about">About Us</Link></li>
                    <li className='text-lg'><Link to="/contact">Contact Us</Link></li>
                    <li className='text-lg'>Cart</li>
                    <button className='login-btn' 
                    onClick={()=>{
                        (btnName==="Login")
                        ?setbtnName("Logout")
                        :setbtnName("Login")}}>{btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;