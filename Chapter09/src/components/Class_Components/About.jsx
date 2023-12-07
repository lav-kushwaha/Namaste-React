import React, { Component } from 'react'
// import User from './User'
import UserClass from './UserClass';

class About extends Component{
  constructor(){
    super();

    console.log("Parent Constructor rendered.")
  }
  //componentDidMount is a mounting phase of reactlifecycle method.
  componentDidMount(){
      console.log("Parent componentDidMount rendered")
  }

  render(){
    console.log("Parent Rendered.")
    return(
      <div className='about'>
      {/* <User name="Hello I am Function props"/> */}

      /*One child Here*/
      {/* <UserClass name="Hello i am class props" location="Silvassa"/> */}

      /*Two Child Here*/
      <UserClass name="First" location="Silvassa"/>
      <UserClass name="Second" location="Gujarat"/>

    </div>
    )
  }
}
export default About;


/*
#NOTE :For one child How react Life cycle work.
<UserClass name="Hello i am class props" location="Silvassa"/>

#How component is rendered in About.jsx.
=>Parent Constructor rendered => Parent Rendered => then it will go "<UserClass/> child class" 
after completing rendering of  "<UserClass/> child class" then  =>componentDidMount rendered.
=>This is the lifeCycle method in class component.

#How About.jsx parent and userClass.jsx. child rendered for one child.
#In Console.log() :
=> Parent Constructor rendered.
=> Parent Rendered.
=> Child Class constructor rendered
=> Child class rendered
=> child componentDidMount rendered
=> Parent componentDidMount rendered
*/

/*
#NOTE :For 2 Child how react life cycle work.
<UserClass name="First" location="Silvassa"/>
<UserClass name="Second" location="Gujarat"/>

#How About.jsx parent and userClass.jsx. child rendered for one child.
#In Console.log() :

=> Parent Constructor rendered.
=> Parent Rendered.

=> FirstChild Class constructor rendered
=> First Child class rendered

=> SecondChild Class constructor rendered
=> Second Child class rendered

#<DOM UPDATED IN SINGLE BATCH>
#Why it will happen ?
=>Because react is optimizes performance like this.

=> Firstchild componentDidMount rendered
=> Secondchild componentDidMount rendered
=> Parent componentDidMount rendered

NOTE:First "constructor will called" then it goes in "render phase" =>If render phase will completed then it goes to "Commit Phase" => Commit phase - where componentDidMount will called at last.

 */