import React, { Component } from 'react'
import User from './User'
import UserClass from './UserClass';
import UserContext from '../utils/UserContext';

class About extends Component{
  constructor(){
    super();
  }
  //componentDidMount is a mounting phase of reactlifecycle method.
  // componentDidMount(){
  //     console.log("Parent componentDidMount rendered")
  // }

  render(){
    return(
      <div className='about'>
        {/*We are using "Consumer" to access data from context in class Component.*/}
       <UserContext.Consumer>
        {({LoggedInUser})=><h2>{LoggedInUser}</h2>}
        </UserContext.Consumer>
       <UserClass/>
      {/* <User/> */}
    </div>
    )
  }
}
export default About;