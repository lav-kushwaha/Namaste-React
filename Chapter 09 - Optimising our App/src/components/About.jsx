import React, { Component } from 'react'
import User from './User'
import UserClass from './userClass';

class About extends Component{
  constructor(){
    super();
  }
  //componentDidMount is a mounting phase of reactlifecycle method.
  componentDidMount(){
      console.log("Parent componentDidMount rendered")
  }

  render(){
    return(
      <div className='about'>
      {/* <UserClass/> */}
      <User/>
    </div>
    )
  }
}
export default About;