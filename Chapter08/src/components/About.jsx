import React from 'react'
import User from './User'
import UserClass from './userClass';

const About = () => {
  return (
    <div className='about'>
      {/* <User name="Hello I am Function props"/> */}
      <UserClass name="Hello i am class props" location="Silvassa"/>
    </div>
  )
} 
export default About;