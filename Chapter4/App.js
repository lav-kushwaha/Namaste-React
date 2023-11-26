import React from 'react'
import ReactDOM from 'react-dom/client'
import logo from './images/logo.png'


//Header
const Header = () =>{
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
                </ul>
            </div>
        </div>
    );
}

const RestaurantCard = (props) =>{
    return(
        <div className='res-card'>
           <img alt="food-card" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/kgt3kqcw4ywqvwwpqiuj'/>
            <div className='card-details'>
             <h3>{props.resname}</h3>
             <p>{props.description}</p>
             <p>4.4 ⭐⭐⭐⭐</p>
            </div>
        </div>
    );
}


const Body = () =>{
    return(
        <div className='Body'>
            <div className='search'>Search</div>
            <div className='res-container'>
                <RestaurantCard resname="Dominozz Pizzas" description="Pizzas, Italian, Pastas, Desserts Samarvarni"/>
                <RestaurantCard resname="KFC" description="Burger Pizza"/>
                <RestaurantCard resname="Starbucks" description="Burger Pizza"/>
                <RestaurantCard resname="BabaKaDhaba" description="Burger Pizza"/>
                <RestaurantCard resname="LavVadapav" description="Burger Pizza"/>
            </div>
        </div>
    );
}



const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);